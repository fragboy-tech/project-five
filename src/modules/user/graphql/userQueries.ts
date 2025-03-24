import { Users } from "../model/userModel";
import { checkLogin } from "../../../utils/checkLogin";
import { IContext } from "../../../utils/types";

export const userQueries = {
  profile: async (
    _parent: undefined,
    _args: undefined,
    { userId }: IContext
  ) => {
    checkLogin(userId);

    try {
      const userDetail = await Users.findOne({ _id: userId });

      return userDetail;
    } catch (err) {
      throw new Error("Failed to fetch profile");
    }
  }
};
