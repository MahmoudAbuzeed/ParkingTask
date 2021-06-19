import { Request, Response } from "express";
import CarService from "../services/CarService";
const carService = new CarService();

export const getCars = async (req: Request, res: Response) => {
  const cars = await carService.getAllCars();
  return res.status(200).json({ cars });
};

export const getSingleCar = async (req: Request, res: any) => {
  const singleCar = await carService.getCarById(req.body.carId);
  return res.status(200).json({ singleCar });
};

export const updateCar = async (req: Request, res: any) => {
  const updatedCar = await carService.updateCar(
    req.body.carId,
    req.body.carObj
  );
  return res.status(200).json({ updatedCar });
};

export const deleteCar = async (req: Request, res: any) => {
  const deletedCar = await carService.deleteCar(req.body.carId);
  return res.status(200).json({ deletedCar });
};

export const registerCar = async (req: Request, res: any) => {
  console.log(req.body);
  const newCar = await carService.registerCar(req.body.car, req.body.user);
  return res.status(200).json({ newCar });
};

export const passedCar = async (req: Request, res: Response) => {
  const finalTax = await carService.passedCar(
    req.body.carId,
    req.body.routeType
  );
  return res.status(200).json({ finalTax });
};
