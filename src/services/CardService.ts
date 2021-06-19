import CardRepository from "../repository/CardRepository";
export default class CardService {
  constructor() {}
  async createCard(card: any) {
    const CardRepo = new CardRepository();
    return await CardRepo.createCard(card);
  }

  async getSingleCard(plateNumber: any) {
    const CardRepo = new CardRepository();
    return await CardRepo.getCardById(plateNumber);
  }
}
