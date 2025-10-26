import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  username: {
    type: String,
    require: true,
    minLength: 3,
    maxLength: 20,
    unique: true,
  },
  email: {
    type: String,
    require: true,
    unique: true,
  },
  password: {
    type: String,
    require: true,
  },
});
const user = mongoose.model("user", userSchema);
export default user;
