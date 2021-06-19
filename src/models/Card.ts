import { Schema, Document, model } from "mongoose";
import ICard from "../interface/ICard";

const CardSchema = new Schema({
  tax: String,
  user: {},
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ICard & Document>("Card", CardSchema);
