import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
    trim: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
    trim: true
  },
  password: {
    type: String,
    required: true,
    trim: true
  },
  credits:{
    type: Number,
    default: 10,
  }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

export default User;