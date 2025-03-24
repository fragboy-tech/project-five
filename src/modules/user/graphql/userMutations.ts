import { Users } from "../model/userModel";

export const userMutations = {
  register: async (
    _parent: undefined,
    args: { userName: string; password: string; email: string }
  ) => {
    return await Users.register(args);
  },
  login: async (
    _parent: undefined,
    args: { password: string; email: string }
  ) => {
    return await Users.login(args);
  }
};
