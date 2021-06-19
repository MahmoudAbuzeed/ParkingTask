import { Request, Response } from "express";
import CarService from "../services/CarService";
const carService = new CarService();

export const getCars = async (res: Response) => {
  const cars = await carService.getAllCars();
  return res.json({ cars });
};

export const getSingleCar = async (req: any, res: any) => {
  const singleCar = await carService.getCarById(req.carId);
  return res.json({ singleCar });
};

export const updateCar = async (req: any, res: any) => {
  const updatedCar = await carService.updateCar(req.carId, req.carObj);
  return res.json({ updatedCar });
};

export const deleteCar = async (req: any, res: any) => {
  const deletedCar = await carService.deleteCar(req.carId);
  return res.json({ deletedCar });
};

export const registerCar = async (req: any, res: any) => {
  const newCar = await carService.registerCar(req.body.car);
  return res.json({ newCar });
};

export const passedCar = async (req: any, res: Response) => {
  const finalTax = await carService.passedCar(req.carId, req.body.routeType);
  return res.json({ finalTax });
};
