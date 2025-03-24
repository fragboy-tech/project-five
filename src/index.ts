import { ApolloServer } from "@apollo/server";
import express from "express";
import jwt from "jsonwebtoken";
import { expressMiddleware } from "@apollo/server/express4";
import dotenv from "dotenv";

import { userSchemaTypes } from "./modules/user/graphql/schema/userSchema";
import { userSchemaQueries } from "./modules/user/graphql/queries/userQueries";
import { userMutations } from "./modules/user/graphql/mutations/userMutations";
import { userQueries } from "./modules/user/graphql/queries/userQueries";
import { userSchemaMutations } from "./modules/user/graphql/mutations/userMutations";

import { Context } from "./modules/user/@types";
import "./config/mongo-connections";

const app = express();
const typeDefs = `
  ${userSchemaTypes}
  type Query {
    ${userSchemaQueries}
  }
  type Mutation {
   ${userSchemaMutations}
  }
`;
const resolvers = {
  Query: {
    ...userQueries,
  },

  Mutation: {
    ...userMutations,
  },
};

const server = new ApolloServer<Context>({
  typeDefs,
  resolvers,
});

const startServer = async () => {
  await server.start();
  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization;

        if (token) {
          try {
            const tokendata = jwt.verify(
              token,
              process.env.SECRET_KEY as string
            ) as any;

            return { user: tokendata?.userId };
          } catch {
            return { user: null };
          }
        }

        return { user: null };
      },
    })
  );

  app.listen(4000, () => {
    console.log("server started on 4000");
  });
};

startServer();
