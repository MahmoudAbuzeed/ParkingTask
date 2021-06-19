import ICard from "../interface/ICard";
import CardModel from "../models/Card";
import { registerItem } from "../shared/functions/registerItem";

class CardRepository {
  async createCard(card: any): Promise<ICard> {
    const newCard = await registerItem(card, CardModel);
    return newCard;
  }
}

export default CardRepository;
