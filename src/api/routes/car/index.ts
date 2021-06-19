import { Router } from "express";
import {
  getCars,
  getSingleCar,
  updateCar,
  deleteCar,
  registerCar,
} from "../../../controller/car";
const route = Router();

export default (app: Router) => {
  app.use("/car", route);

  route.get("/all-cars", getCars);
  route.get("/get-single-car", getSingleCar);
  route.post("/update-car", updateCar);
  route.post("/delete-car", deleteCar);
  route.post("/register-car", registerCar);
};
