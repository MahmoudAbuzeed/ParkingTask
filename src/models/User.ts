import { Schema, Document, model } from "mongoose";
import IUser from "../interface/IUser";
import mongoose from "mongoose";

const { ObjectId } = mongoose.Schema.Types;

const UserSchema = new Schema({
  name: String,
  position: String,
  age: Number,
  cars: [{ id: { type: ObjectId, ref: "Car" } }],
  cards: [{ id: { type: ObjectId, ref: "Card" } }],
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<IUser & Document>("User", UserSchema);
