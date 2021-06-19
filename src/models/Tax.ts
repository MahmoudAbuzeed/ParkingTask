import { Schema, Document, model } from 'mongoose';
import ITax from '../interface/ITax';

const ProductSchema = new Schema({
  value: Number,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export default model<ITax & Document>('Product', ProductSchema);
