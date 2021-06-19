import IUser from "../interface/IUser";
import moment from "moment";
import UserModel from "../models/User";
import bcrypt from "bcryptjs";

import { Messages } from "../messages/index";

const formattedDate: any = moment(Date.now()).format("DD-MMM-YYYY HH:mm:ss");

class UserRepository {
  async getAllUsers(): Promise<Array<IUser>> {
    const users = await UserModel.find({});
    return users;
  }

  async addUser(user: any): Promise<IUser> {
    const userData = await UserModel.findOne({ email: user.email });
    if (userData) return userData;

    user.password = bcrypt.hashSync(user.password);
    let newUser = new UserModel({
      name: user.name,
      email: user.email,
      password: user.password,
    });
    newUser.save();
    return newUser;
  }
}

export default UserRepository;
