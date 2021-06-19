import CarRepository from "../repository/CarRepository";
import CardRepository from "../repository/CardRepository";
import { Messages } from "../messages/index";
import ICar from "../interface/ICar";

const CarRepo = new CarRepository();
const CardRepo = new CardRepository();

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
}
