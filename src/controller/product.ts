import { Request, Response } from "express";
import ParkService from "../services/ParkService";

export const calculateTax = async (step: string, currentTax: number) => {
  const parkService = new ParkService();
  const taxResult = await parkService.addTax(step, currentTax);
  return taxResult;
};

export const getProd = async (req: Request, res: Response) => {
  return res.json({ Hello: "Hello World" });
};
