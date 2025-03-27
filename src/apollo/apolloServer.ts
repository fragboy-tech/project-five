import { ApolloServer } from "@apollo/server";
import { IContext } from "../utils/types";
import { apolloSchema } from "./graphql/schema";
import { queries } from "./graphql/queries";
import { mutations } from "./graphql/mutations";
import { userResolvers } from "../modules/user/graphql/userResolver";
import { transactionResolvers } from "../modules/transaction/graphql/transactionResolvers";
import { categoryResolvers } from "../modules/category/graphql/categoryResolvers";

const resolvers = {
  Query: {
    ...queries,
  },

  Mutation: {
    ...mutations,
  },

  User: {
    ...userResolvers,
  },
  Transaction: {
    ...transactionResolvers,
  },
  Category: {
    ...categoryResolvers,
  },
};

export const apolloServer = new ApolloServer<IContext>({
  typeDefs: apolloSchema,
  resolvers,
});
