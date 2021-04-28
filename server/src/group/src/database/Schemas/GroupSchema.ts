import { Schema, model } from "mongoose"

const UserSchema = new Schema({
  name: { type: String, required: true },
  category: { type: [String], required: true },
  subject: { type: Object, required: true },
  is_public: { type: Boolean, required: true },
  _owner: { type: Schema.Types.ObjectId, required: true },
  _user_list: { type: [Schema.Types.ObjectId], required: true },
  _schedule_list: { type: [Schema.Types.ObjectId], required: true },
}, {
  timestamps: true,
})

export default model("Groups", UserSchema);