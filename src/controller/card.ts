import { Request, Response } from "express";
import CardService from "../services/CardService";
const cardService = new CardService();

export const createUserCard = async (req: any, res: Response) => {
  const card = await cardService.createCard(req.card);
  return res.json({ card });
};
