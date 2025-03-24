import { ApolloServer } from "@apollo/server";
import { IContext } from "../utils/types";
import { apolloSchema } from "./graphql/schema";
import { queries } from "./graphql/queries";
import { mutations } from "./graphql/mutations";
import { userResolvers } from "../modules/user/graphql/userResolver";

const resolvers = {
  Query: {
    ...queries
  },

  Mutation: {
    ...mutations
  },

  User: {
    ...userResolvers
  }
};

export const apoloServer = new ApolloServer<IContext>({
  typeDefs: apolloSchema,
  resolvers
});
