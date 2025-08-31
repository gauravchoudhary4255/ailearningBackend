interface ConfigEnvironment {
  MONGO_SRV?: string;
  JWT_SECRET?: string;
  PORT?: number;
  HTTPS_PORT?: number;
  HTTPS_SERVER_CERT_PATH?: string;
  HTTPS_SERVER_KEY_PATH?: string;
  WINSTON?: WINSTON;
  NODE_ENV?: string;
  HTTPS_KEY: any;
  HTTPS_CERT?: any;
  ENV?: string;
  REDIS_URL?: string;
  REDIS_HOSTNAME?: string;
  REDIS_PORT?: string;
  REDIS_DB?: string;
  MONGO_PASSWORD: string;
  MONGO_HOST?: string;
  MONGO_DB_NAME?: string;
  GEMINI_API_KEY ?: string;
}

interface WINSTON {
  LEVEL?: string;
}

export default ConfigEnvironment;
