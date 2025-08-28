import 'dotenv/config';
import express from 'express';
import compression from 'compression';
import Controller from './interfaces/controller.interface';
import { errorMiddleware ,serviceErrorMiddleware} from './middleware/responseApi.middleware';
import mongodb from './connections/database';
import Logger from './logger';
import cors from 'cors';
 import morganMiddleware from './middleware/morgan.middleware';
import getconfig from './config';
import controllers from './api';
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';
import { get } from 'lodash';

// import { agenda } from './utils/agendaScheduling';
import { COMMON_CONSTANT, AGENDA_JOB_CONSTANT } from './constant';
// import moment from 'moment';
// import { initializeSocket } from './connections/socket';

process.env.TZ = COMMON_CONSTANT.INDIA_TIMEZONE;

class App {
  public app: express.Application;
  private server: http.Server | https.Server;

  constructor() {
    this.app = express();

    Promise.all([
      this.connectToTheDatabase(),
      this.initializeMiddleware(),
      this.initializeControllers(),
      this.initializeErrorHandling()
    ]).then(() => {
      this.initializeServer();
      this.listen();
    });
  }

  private async connectToTheDatabase() {
    await mongodb.init();
  }

  private async initializeMiddleware() {
    this.app.use('/export', express.static('src/download'));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(cors());
    this.app.use(compression());
    this.app.use(morganMiddleware);
  }

  private async initializeErrorHandling() {
    this.app.use(serviceErrorMiddleware);
    this.app.use(errorMiddleware);
  }

  private async initializeControllers() {
    controllers.forEach((controller: Controller) => {
      this.app.use('/', controller.router);
    });
  }

  private async initializeServer() {
    const { HTTPS_CERT, HTTPS_KEY } = getconfig();
    this.server = http.createServer(this.app);
    if (HTTPS_KEY && HTTPS_CERT) {
      const KEY = fs.readFileSync(HTTPS_KEY);
      const CERT = fs.readFileSync(HTTPS_CERT);
      if (KEY && CERT) {
        this.server = https.createServer({ key: KEY, cert: CERT }, this.app);
      }
    }

    
  }

  public async listen(): Promise<void> {
    const { PORT } = getconfig();

    this.server.listen(PORT, () => {
      Logger.info(`App listening on the PORT ${PORT}`);
    });
  }
}

try {
  new App();
} catch (e: any) {
  Logger.error(`Error on project startup: ${e.message}`);
}

process
  .on('unhandledRejection', (response, p) => {
    Logger.error(response);
    Logger.error(p);
  })
  .on('uncaughtException', (err) => {
    Logger.error(err);
  });

export default App;
