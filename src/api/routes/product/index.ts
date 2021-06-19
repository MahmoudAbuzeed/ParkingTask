import { Router } from "express";
import { getProd } from "../../../controller/product";
const route = Router();

export default (app: Router) => {
  app.use("/product", route);

  route.get("/", getProd);
};
