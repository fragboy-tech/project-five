import { Users } from "../../model/userModel";
import { Context } from "../../@types";
import { checkLogin } from "../../../../utils/checkLogin";

export const userSchemaQueries = `
    profile(userName: String!, password: String!): User
`;
export const userQueries = {
  profile: async (
    _parent: undefined,
    args: { title: string },
    { user }: Context
  ) => {
    checkLogin(user);
    try {
      const book = await Users.findOne(args);
      console.log("1", book);
      return book; // Fetch a single book by its title
    } catch (err) {
      throw new Error("Failed to fetch book");
    }
  },
};
