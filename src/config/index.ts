import dotenv from "dotenv";
import { ProcessEnv } from "../types/Enviroment/index";

// Set the NODE_ENV to 'development' by default
process.env.NODE_ENV = process.env.NODE_ENV || "development";

const envFound = dotenv.config();
if (envFound.error) throw new Error("⚠️  Couldn't find .env file  ⚠️");

export default {
  PORT: process.env.PORT,
  IN_PROD: process.env.IN_PROD,
  LOGGER: process.env.LOGGER,
  NODE_ENV: process.env.NODE_ENV,
  DATABASE_URL: `mongodb://${process.env.MONGODB_ROOT_USERNAME}:${process.env.MONGODB_ROOT_PASSWORD}@host:27017/${process.env.MONGODB_DBNAME}`,
} as ProcessEnv;