import 'dotenv/config';
import express from 'express';
import compression from 'compression';
// import Controller from './interfaces/controller.interface';
// import { errorMiddleware } from './middleware/responseAPI.middleware';
// import mongodb from './connections/database';
// import Logger from './logger';
import cors from 'cors';
// import morganMiddleware from './middleware/morgan.middleware';
// import getconfig from './config';
// import controllers from './api';
import * as http from 'http';
import * as https from 'https';
import * as fs from 'fs';
// import { agenda } from './utils/agendaScheduling';
// import { COMMON_CONSTANT, AGENDA_JOB_CONSTANT } from './constant';
// import moment from 'moment';
// import { initializeSocket } from './connections/socket';

// process.env.TZ = COMMON_CONSTANT.INDIA_TIMEZONE;

class App {
  public app: express.Application;
  private server: http.Server | https.Server;

  constructor() {
    this.app = express();

    Promise.all([
      this.connectToTheDatabase(),
      this.initializeMiddleware(),
      // this.initializeControllers(),
      // this.initializeErrorHandling()
    ]).then(() => {
      this.initializeServer();
      this.listen();
    });
  }

  private async connectToTheDatabase() {
    // await mongodb.init();
  }

  private async initializeMiddleware() {
    this.app.use('/export', express.static('src/download'));
    this.app.use(express.urlencoded({ extended: false }));
    this.app.use(express.json({ limit: '50mb' }));
    this.app.use(cors());
    this.app.use(compression());
    // this.app.use(morganMiddleware);
  }

  // private async initializeErrorHandling() {
  //   this.app.use(errorMiddleware);
  // }

  // private async initializeControllers() {
  //   controllers.forEach((controller: Controller) => {
  //     this.app.use('/', controller.router);
  //   });
  // }

  private async initializeServer() {
    const HTTPS_KEY = "";
    const HTTPS_CERT = "";
    this.server = http.createServer(this.app);
    if (HTTPS_KEY && HTTPS_CERT) {
      const KEY = fs.readFileSync(HTTPS_KEY);
      const CERT = fs.readFileSync(HTTPS_CERT);
      if (KEY && CERT) {
        this.server = https.createServer({ key: KEY, cert: CERT }, this.app);
      }
    }

    // // Initialize Socket.IO
    // await initializeSocket(this.server);
  }

  public async listen(): Promise<void> {
    const  PORT  = 5001;

    this.server.listen(PORT, () => {
     console.log(`App listening on the PORT ${PORT}`);
      // Logger.info(`App listening on the PORT ${PORT}`);
    });

    (async () => {
      // IIFE to give access to async/await
      // await agenda.start();

      // schedule job for next day
      // const jobName = AGENDA_JOB_CONSTANT.JOB_NAME_OBJ.DAILY_UPLOAD_LOGFILE;
      // const uploadLogFileDate: any = moment().add(1, 'days').set({ hour: 0, minute: 1, second: 0, millisecond: 0 });

      // await agenda.cancel({ name: jobName });
      // const jobScheduleResult = await agenda.schedule(uploadLogFileDate, jobName, {});
      // Logger.info(`Upload Log File ${jobScheduleResult}`);

      // schedule job for TDS at the end of the financial year
      // const TDSatTheEndOfTheFinancialYear = AGENDA_JOB_CONSTANT.JOB_NAME_OBJ.TDS_AT_THE_END_OF_THE_FINANCIAL_YEAR;

      // const financialYearStart = moment.tz('Asia/Kolkata').month('April').date(1).startOf('day').format();
      // const financialYearEnd = moment(financialYearStart).add(1, 'year').subtract(1, 'day').endOf('day').subtract(1, 'second').format();
      // await agenda.cancel({ name: TDSatTheEndOfTheFinancialYear });
      // const TDSatTheEndOfTheFinancialYearResult = await agenda.schedule(financialYearEnd, TDSatTheEndOfTheFinancialYear, {});

      // // schedule job for next day for check uninstall count
      // const uninstallJobName = AGENDA_JOB_CONSTANT.JOB_NAME_OBJ.DAILY_CHECK_UNINSTALL;
      // const uninstallJobDateStr = moment().add(1, 'days').startOf('day').toDate();

      // await agenda.cancel({ name: uninstallJobName });
      // const uninstallJobResult = await agenda.schedule(uninstallJobDateStr, uninstallJobName, {});

      // schedule a job every 4 hours for check phonepe pending transaction
      // const phonepePendingTransaction = AGENDA_JOB_CONSTANT.JOB_NAME_OBJ.PHONEPE_PENDING_TRANSACTION;
      // await agenda.every('6 hours', phonepePendingTransaction);
    })();
  }
}

try {
  new App();
} catch (e: any) {
  // Logger.error(`Error on project startup: ${e.message}`);
}

process
  .on('unhandledRejection', (response, p) => {
    // Logger.error(response);
    // Logger.error(p);
  })
  .on('uncaughtException', (err) => {
    // Logger.error(err);
  });

export default App;