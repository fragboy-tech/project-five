import mongoose from "mongoose";
const schema = mongoose.Schema;

export const categorySchema = new schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
    },
    status: {
      type: String,
      required: true,
      enum: ["Active", "Inactive"],
    },
    description: {
      type: String,
    },
  },
  { timestamps: true }
);
