import { Request, Response } from "express";
import CarService from "../services/CarService";
const carService = new CarService();

export const getCars = async (res: Response) => {
  const cars = await carService.getAllCars();
  return res.json({ cars });
};

export const registerCar = async (req: any, res: Response) => {
  const car = await carService.registerCar(req.car);
  return res.json({ car });
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
