import ConfigEnvironment from '../interfaces/config.interface';
import development from './development.config';
import { ENVIRONMENT } from '../constant';

const getconfig = (): ConfigEnvironment => {
  if (process.env.NODE_ENV === ENVIRONMENT.DEVELOPMENT) {
    return development();
  } else {
    return development();
  }
};

export default getconfig;
