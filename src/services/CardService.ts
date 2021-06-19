import CardRepository from "../repository/CardRepository";
export default class CardService {
  constructor() {}
  async createCard(card: any, user: any) {
    const CardRepo = new CardRepository();
    return await CardRepo.createCard(card, user);
  }

  async getSingleCard(plateNumber: any) {
    const CardRepo = new CardRepository();
    return await CardRepo.getCardByPlateNumber(plateNumber);
  }
}
