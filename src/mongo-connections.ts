import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
mongoose
  .connect(process.env.MONGO_URL as string)
  .then(() => {
    console.log("connected to MONGO");
  })
  .catch(err => console.error(err));
