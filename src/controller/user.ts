import { Request, Response } from "express";
import UserService from "../services/UserService";

const userService = new UserService();

export const get = async (req: Request, res: Response) => {
  const users = await userService.getUsers();
  return res.json({ users });
};

export const addUser = async (req: Request, res: Response) => {
  const { user, card, car } = req.body;
  const newUser = await userService.addNewUser(user, card, car);
  return res.status(200).json({ newUser });
};
