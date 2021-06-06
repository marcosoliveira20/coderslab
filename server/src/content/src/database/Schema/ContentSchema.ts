import { Schema, model } from 'mongoose';

const ContentSchema = new Schema(
  {
    title: { type: String, required: true, unique: false },
    description: { type: String, required: true },
    deadline: { type: Date, required: true },
    reference: { type: String, required: true },
    is_done: { type: Boolean, required: false, default: false },
    challenge: { type: [], required: false },
    _roadmap_id: { type: String, required: false },
    doneDateTime: { type: Date, required: false },
  },
  {
    timestamps: true,
  },
);

export default model('contents', ContentSchema);
