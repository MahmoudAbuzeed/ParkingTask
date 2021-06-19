import ICar from "../interface/ICar";
import ICard from "../interface/ICard";
import IUser from "../interface/IUser";
import UserRepository from "../repository/UserRepository";
import CardService from "./CardService";
import CarService from "./CarService";

export default class UserService {
  private userRepository: UserRepository;
  private cardService: CardService;
  private carService: CarService;

  constructor() {
    this.userRepository = new UserRepository();
    this.carService = new CarService();
    this.cardService = new CardService();
  }
  async getUsers(): Promise<Array<IUser>> {
    return await this.userRepository.getAllUsers();
  }

  async addNewUser(user: IUser, card: ICard, car: ICar): Promise<IUser> {
    const userRepo = new UserRepository();
    const newUser = await userRepo.addUser(user);
    const newCard = await this.cardService.createCard(card, newUser);
    const newCar = await this.carService.registerCar(car, newUser, newCard);
    console.log(newCar);
    console.log(newCard);

    newUser["cards"] = [...newUser["cards"], newCard._id];
    newUser["cars"] = [...newUser["cars"], newCar._id];
    await newUser.save();

    return newUser;
  }
}
