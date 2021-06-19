import { Request, Response } from "express";
import ParkService from "../services/ParkService";
import { Step } from "../services/Employee/Step";

export const calculateTax = async (req: Request, res: Response) => {
  const parkService = new ParkService();
  const taxResult = await parkService.addTax(Step.WELCOME); // req.body.step
  return res.json({ taxResult });
};

export const getProd = async (req: Request, res: Response) => {
  return res.json({ Hello: "Hello World" });
};
