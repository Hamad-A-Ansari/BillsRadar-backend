import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "User Name is required"],
    trim: true,
    minlength: [3, "User Name must be at least 3 characters long"],
    maxlength: [50, "User Name must be at most 50 characters long"],
  },
  email: {
    type: String,
    required: [true, "User Email is required"],
    unique: true,
    lowercase: true,
    trim: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: (props) => `${props.value} is not a valid email!`,
    },
  }
});