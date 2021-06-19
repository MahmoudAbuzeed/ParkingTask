import IUser from "../interface/IUser";
import moment from "moment";

const formattedDate: any = moment(Date.now()).format("DD-MMM-YYYY HH:mm:ss");

class UserRepository {
  async getUser(): Promise<IUser> {
    return {
      name: "user1",
      position: "position1",
      age: 15,
      cars: [],
      cards: [],
      createdAt: formattedDate,
      updatedAt: formattedDate,
    };
  }
}

export default UserRepository;
