import { Router } from "express";
import { addUser } from "../../../controller/user";
const route = Router();

export default (app: Router) => {
  app.use("/user", route);

  // route.get("/", get);
  route.post("/add-user", addUser);
};
