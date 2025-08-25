import mongoose, { connect, ConnectOptions } from 'mongoose';
import getconfig from '../config';
import Logger from '../logger';
import { min } from 'lodash';

class MongoBot {
  async init(): Promise<void> {
    try {
      const { MONGO_DB_NAME, MONGO_HOST, MONGO_PASSWORD } = getconfig();
      const connectionString = `mongodb+srv://gauravchoudhary4255:${MONGO_PASSWORD}@${MONGO_HOST}/${MONGO_DB_NAME}`;
      Logger.info(connectionString, '<----connectionString---->');
      const options = {
        autoIndex: true,
        maxPoolSize: 10,
        minPoolSize: 5,
        connectTimeoutMS: 10000,
        socketTimeoutMS: 45000
      };

      function setRunValidators() {
        return { runValidators: true };
      }

      mongoose.set('strictQuery', true);

      mongoose
        .plugin((schema: any) => {
          schema.pre('findOneAndUpdate', setRunValidators);
          schema.pre('updateMany', setRunValidators);
          schema.pre('updateOne', setRunValidators);
          schema.pre('update', setRunValidators);
        })
        .connect(connectionString, options)
        .then(() => {
          Logger.info('MongoDB Connected...');
        })

        .catch((error) => {
          Logger.error('MongoDB connection error:', error);
        });

      mongoose.connection.on('connected', () => {
        Logger.info('Mongoose connected to DB');
      });

      mongoose.connection.on('error', (err) => {
        Logger.error('Mongoose connection error:', err);
      });

      mongoose.connection.on('disconnected', () => {
        Logger.warn('Mongoose disconnected');
      });

      process.on('SIGINT', async () => {
        await mongoose.connection.close().finally(() => {
          Logger.info('Mongoose disconnected on app termination (SIGINT)');
          process.exit(0);
        });
      });
    } catch (err) {
      Logger.error('MongoDB Error-->', err);
      process.exit(0);
    }
  }
}

export default new MongoBot();
