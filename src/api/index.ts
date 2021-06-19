import { Router } from "express";
import car from "./routes/car";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  car(app);

  return app;
};
