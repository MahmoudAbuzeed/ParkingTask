import mongoose, { Schema, Document, model } from "mongoose";
import ICar from "../interface/ICar";

const { ObjectId } = mongoose.Schema.Types;

const CarSchema = new Schema({
  brand: String,
  model: String,
  plateNumber: String,
  user: { type: ObjectId, ref: "User", required: true },
  card: { type: ObjectId, ref: "Card", required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ICar & Document>("Car", CarSchema);
