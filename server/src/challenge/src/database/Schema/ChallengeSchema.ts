import { Schema, model } from "mongoose";

const ChallengeSchema = new Schema({
  title: { type: String, required: true},
  description: { type: String, required: true},
  is_done: { type: Boolean, default: false },
}, {
  timestamps: true,
});

export default model("Challenge", ChallengeSchema);
