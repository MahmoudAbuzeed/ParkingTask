import { ObjectId } from "mongoose";

export default interface ICard {
  _id: ObjectId;
  tax: number;
  userId: string;
  createdAt: Date;
  updatedAt: Date;
}
