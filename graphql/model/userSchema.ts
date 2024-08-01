import mongoose from "mongoose";

const { Schema } = mongoose;

const userSchema = new Schema({
  userName: { type: String, required: true },
  password: { type: String, required: true },
  age: { type: Number, required: true },
  phoneNumber: { type: Number, required: true },
});

const userModel = mongoose.models.users || mongoose.model("users", userSchema);

export default userModel;
