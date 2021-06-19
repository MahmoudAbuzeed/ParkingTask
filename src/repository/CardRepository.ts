import ICard from "../interface/ICard";
import CardModel from "../models/Card";
import { Messages } from "../messages/index";

class CardRepository {
  async createCard(card: any, user: any): Promise<ICard> {
    const UserCard = await CardModel.findOne({
      platteNumber: card.platteNumber,
    });

    if (UserCard) return UserCard;
    let newCard = new CardModel({ card, user: user.id });
    newCard.save();
    return newCard;
  }

  async getCardByPlateNumber(plateNumber: any): Promise<ICard> {
    let card = await CardModel.findById(plateNumber);
    return card;
  }
}

export default CardRepository;
