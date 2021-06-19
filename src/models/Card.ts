import mongoose, { Schema, Document, model } from "mongoose";
import ICard from "../interface/ICard";

const { ObjectId } = mongoose.Schema.Types;

const CardSchema = new Schema({
  tax: Number,
  user: { id: { type: ObjectId, ref: "User" } },

  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ICard & Document>("Card", CardSchema);
