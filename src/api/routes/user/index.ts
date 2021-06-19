import { Router } from "express";
import { get } from "../../../controller/user";
const route = Router();

export default (app: Router) => {
  app.use("/user", route);

  route.get("/", get);
};
