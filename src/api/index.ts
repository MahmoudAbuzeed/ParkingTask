import { Router } from "express";
import car from "./routes/car";
import user from "./routes/user";

// guaranteed to get dependencies
export default () => {
  const app = Router();
  car(app);
  user(app);

  return app;
};
