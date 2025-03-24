import { Document } from "mongoose";

export interface IUser {
  email: string;
  password: string;
  userName: string;
}

export interface IUserDocument extends IUser, Document {
  createdAt?: Date;
  updatedAt?: Date;
}
