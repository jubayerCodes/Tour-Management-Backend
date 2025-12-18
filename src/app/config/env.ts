import dotenv from "dotenv";

dotenv.config();

interface EnvConfig {
  PORT: string;
  DB_URL: string;
  NODE_ENV: string;
}

const loadEnvVariables = (): EnvConfig => {
  const reqEnvVariables: string[] = ["PORT", "DB_URL", "NODE_ENV"];

  reqEnvVariables.forEach((envVar) => {
    if (!process.env[envVar]) {
      throw new Error(`Missing required environment variable: ${envVar}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DB_URL: process.env.DB_URL as string,
    NODE_ENV: process.env.NODE_ENV as string,
  };
};

export const envVars: EnvConfig = loadEnvVariables();
