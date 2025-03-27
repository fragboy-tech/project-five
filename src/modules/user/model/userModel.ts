import mongoose, { Model } from "mongoose";
import { userSchema } from "./userSchema";
import { IUser } from "../@types";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { getSecret } from "../../../utils/getSecret";

interface UserModel extends Model<IUser> {
  register({ email, password, userName }: IUser): Promise<Boolean>;
  login({
    email,
    password,
  }: {
    email: string;
    password: string;
  }): Promise<String>;
}

class User {
  static async register(this: UserModel, { email, password, userName }: IUser) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await this.create({
      userName,
      email,
      password: hashedPassword,
    });

    return user ? true : false;
  }
  static async login(
    this: UserModel,
    { email, password }: { email: string; password: string }
  ) {
    const user = await this.findOne({ email }).lean();

    if (!user) {
      throw new Error("User not found");
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
      throw new Error("Password is wrong");
    }

    const token = jwt.sign({ userId: user._id }, getSecret());

    return token;
  }
}

userSchema.loadClass(User);

export const Users = mongoose.model<IUser, UserModel>("Users", userSchema);
