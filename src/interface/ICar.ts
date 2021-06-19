import { ObjectId } from "mongoose";

export default interface ICar {
  _id: ObjectId;
  brand: string;
  model: string;
  plateNumber: string;
  user: string;
  card: string;
  createdAt: Date;
  updatedAt: Date;
}
