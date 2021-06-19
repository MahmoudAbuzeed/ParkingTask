import { ObjectId } from "mongoose";

export default interface IUser {
  _id: ObjectId;
  name: string;
  position: string;
  age: number;
  cars: Array<ObjectId>;
  cards: Array<ObjectId>;
  createdAt: Date;
  updatedAt: Date;
  save();
}
