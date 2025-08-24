// import 'dotenv/config';
// import ConfigEnvironment from '../interfaces/config.interface';

// const DEVELOPMENT = (): ConfigEnvironment => {
//   const {
//     // * http
//     PORT,
//     HTTPS_PORT,
//     HTTPS_SERVER_CERT_PATH,
//     HTTPS_SERVER_KEY_PATH,
//     MONGO_SRV,
//     JWT_SECRET,
//     NODE_ENV,
//     HTTPS_KEY,
//     HTTPS_CERT,
//     ENV,
//     REDIS_URL,
//     REDIS_HOSTNAME,
//     REDIS_PORT,
//     REDIS_DB
//   } = process.env;

//   return {
//     NODE_ENV: NODE_ENV ? NODE_ENV : 'development',
//     // * DB CONFIG
//     MONGO_SRV: MONGO_SRV ? MONGO_SRV : '',

//     // *JWT SECRET
//     JWT_SECRET: JWT_SECRET ? JWT_SECRET : '',

//     // * SERVER CONFIG
//     PORT: PORT ? Number(PORT) : 3000,
//     HTTPS_PORT: HTTPS_PORT ? Number(HTTPS_PORT) : 8000,
//     HTTPS_SERVER_CERT_PATH: HTTPS_SERVER_CERT_PATH
//       ? HTTPS_SERVER_CERT_PATH
//       : '',
//     HTTPS_SERVER_KEY_PATH: HTTPS_SERVER_KEY_PATH ? HTTPS_SERVER_KEY_PATH : '',
//     HTTPS_KEY: HTTPS_KEY || '',
//     HTTPS_CERT: HTTPS_CERT || '',``````
//     ENV: ENV || '',
//     REDIS_URL: REDIS_URL || '',
//     REDIS_HOSTNAME: REDIS_HOSTNAME || '',
//     REDIS_PORT: REDIS_PORT || '',
//     REDIS_DB: REDIS_DB || ''
//   };
// };

// export default DEVELOPMENT;
