import { ObjectId } from "mongoose";

export default interface IProduct {
  _id: ObjectId;
  title: string;
  description: string;
  price: number;
  createdAt: Date;
  updatedAt: Date;
}
