import { Schema, model } from "mongoose";

const ChallengeSchema = new Schema({
    title: { type: String, required: false},
    description: { type: String, required: false},
    is_done: { type: Boolean, required: false, default: false},
    content_id: { type: String, required: false},
}, {
  timestamps: true,
});

export default model("Challenge", ChallengeSchema);

