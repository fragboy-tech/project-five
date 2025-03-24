import { IUser } from "../modules/user/@types";

export const checkLogin = (user?: IUser) => {
  if (!user) {
    throw new Error("Login!!");
  }
};
