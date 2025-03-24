import { Document } from "mongoose";

export interface ITrans {
  amount: string;
  categoryId: string;
  date: string;
  description: string;
  type: string;
  userId: string;
}

export interface ITransDocument extends ITrans, Document {
  createdAt?: Date;
}

export interface Context {
  user?: ITrans;
}
