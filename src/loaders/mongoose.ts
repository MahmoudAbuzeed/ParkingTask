import mongoose from "mongoose";
import { Db } from "mongodb";
import config from "../config";
import logger from "../shared/utils/logger";

export default async (): Promise<Db> => {
  try {
    const connection = await mongoose.connect(config.DATABASE_URL, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    logger.log("DB Connection Successfully! 🚀🚀🔥🔥");
    return connection.connection.db;
  } catch (err) {
    logger.error(err);
  }
};
