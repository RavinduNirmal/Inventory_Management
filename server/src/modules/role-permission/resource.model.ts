import { Schema, model } from 'mongoose';

const resourceSchema = new Schema({
  name: { type: String, required: true, unique: true }
}, { timestamps: true });

const Resource = model('Resource', resourceSchema);
export default Resource;
