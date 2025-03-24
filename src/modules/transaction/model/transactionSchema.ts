import mongoose from "mongoose";

const schema = mongoose.Schema;

export const transactionSchema = new schema(
  {
    amount: {
      type: Number,
      required: true
    },
    categoryId: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true
    },
    description: {
      type: String
    },
    type: {
      type: String,
      required: true,
      enum: ["income", "expense"]
    },
    userId: {
      type: String,
      required: true
    }
  },
  { timestamps: true }
);
