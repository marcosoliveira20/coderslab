import { Schema, model } from "mongoose"

const GroupSchema = new Schema({
  name: { type: String, required: true },
  number_members: { type: Number, required: false},
  next_schedule: {type: Date, required: false},
  category: { type: [String], required: true },
  subject_label: { type: String, required: true },
  level: { type: Number, required: true },
  token: { type: String, required: true, unique: true },
  is_public: { type: Boolean, required: true },
  is_default: { type: Boolean, required: true },
  _owner: { type: Schema.Types.ObjectId, required: true },
  _schedule_list: { type: [Object], required: false },
}, {
  timestamps: true,
})

export default model("Groups", GroupSchema);