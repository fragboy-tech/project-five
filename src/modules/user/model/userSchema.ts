import mongoose from "mongoose";

const schema = mongoose.Schema;

export const userSchema = new schema(
  {
    email: {
      type: String,
      required: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    userName: {
      type: String,
      required: true
    }
  },
  { collection: "users", timestamps: true }
);
