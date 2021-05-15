import { Schema, model } from "mongoose"

const InterestsSchema = new Schema({
  _id_user: { type: Schema.Types.ObjectId, required: true },
  _id_subject: { type: Schema.Types.ObjectId, required: true },
  level: { type: Number, required: true }
}, {
  timestamps: true,
})

export default model("Interests", InterestsSchema)