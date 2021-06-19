import { MongoNetworkError } from "mongodb";
import ICar from "../interface/ICar";
import CarModel from "../models/Car";

import { registerItem } from "../shared/functions/registerItem";

class CarRepository {
  async getAllCars(): Promise<Array<ICar>> {
    const cars = await CarModel.find({});
    return cars;
  }

  async gatSingleCar(carId: string): Promise<ICar> {
    let car = await CarModel.findById(carId);
    return car;
  }

  async deleteCar(carId: string): Promise<ICar> {
    let deletedCar = await CarModel.findByIdAndDelete(carId);
    return deletedCar;
  }
  async updateCar(carId: string, carObj: ICar): Promise<ICar | null> {
    return await CarModel.findOneAndUpdate({ _id: carId }, { $set: carObj });
  }

  async registerCar(carParam: any): Promise<ICar> {
    const newCar = await registerItem(carParam, CarModel);
    return newCar;
  }
}

export default CarRepository;
