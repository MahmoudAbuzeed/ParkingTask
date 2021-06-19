import UserRepository from "../repository/UserRepository";
export default class ProductService {
  constructor() {}
  async getAll() {
    const userRepo = new UserRepository();
    return await userRepo.getUser();
  }
}
