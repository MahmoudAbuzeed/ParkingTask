import { Request, Response } from "express";
import UserService from "../services/UserService";

export const get = async (req: Request, res: Response) => {
  const userService = new UserService();
  return res.json({ userService });
};
