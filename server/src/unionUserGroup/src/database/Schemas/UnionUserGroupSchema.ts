import { Schema, model } from "mongoose";

const UnionUserGroupSchema = new Schema({
    _id_user: { type: Schema.Types.ObjectId, required: true },
    _id_group: { type: Schema.Types.ObjectId, required: true }
}, {
    timestamps: true,
});

export default model("union_users_groups", UnionUserGroupSchema);