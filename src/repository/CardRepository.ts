import ICard from "../interface/ICard";
import CardModel from "../models/Card";
import { Messages } from "../messages/index";

class CardRepository {
  async createCard(card: any, user: any): Promise<ICard> {
    let newCard = new CardModel({ tax: card.tax, user: user.id });
    newCard.save();
    return newCard;
  }

  async getCardByPlateNumber(plateNumber: any): Promise<ICard> {
    let card = await CardModel.findById(plateNumber);
    return card;
  }
}

export default CardRepository;
