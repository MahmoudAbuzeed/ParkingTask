import { Router } from "express";
import {
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
  registerCar,
  passedCar,
} from "../../../controller/car";
const route = Router();

export default (app: Router) => {
  app.use("/car", route);

  route.get("/", getCars);
  route.get("/get-single-car", getSingleCar);
  route.post("/update-car", updateCar);
  route.post("/delete-car", deleteCar);
  route.post("/register-car", registerCar);

  route.post("/passed-car", passedCar);
};
