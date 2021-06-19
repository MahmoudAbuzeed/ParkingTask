import CarRepository from "../repository/CarRepository";
import CardRepository from "../repository/CardRepository";
import HighwayWelcomeTax from "./Park/HighwayWelcomeTax";
import TaxStrategy from "./Park/TaxStrategy";
import CardService from "./CardService";
import ICar from "../interface/ICar";

import { Messages } from "../messages/index";

const CarRepo = new CarRepository();
const CardRepo = new CardRepository();
const cardService = new CardService();
const taskStrategy = new TaxStrategy(new HighwayWelcomeTax());

export default class CarService {
  constructor() {}

  async getAllCars() {
    return await CarRepo.getAllCars();
  }

  async registerCar(car: any) {
    const newCar = await CarRepo.registerCar(car);
    if (newCar) {
      const newCard = await CardRepo.createCard(newCar);
      return { newCar, newCard };
    } else {
      return { error: Messages.FailedCreate };
    }
  }

  async getCarById(carId: string) {
    return await CarRepo.gatSingleCar(carId);
  }

  async updateCar(carId: string, carObj: ICar) {
    return await CarRepo.updateCar(carId, carObj);
  }

  async deleteCar(carId: string) {
    return await CarRepo.deleteCar(carId);
  }

  async passedCar(carId: any, step: string) {
    const passedCar = await CarRepo.gatSingleCar(carId);
    if (passedCar) {
      const card = await cardService.getSingleCard(passedCar.plateNumber);
      const finalTax = taskStrategy.calculateTax(card.tax, step);
      return finalTax;
    } else {
      return { error: Messages.doseNotExist };
    }
  }
}
