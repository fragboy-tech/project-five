import express from "express";
import jwt from "jsonwebtoken";
import { expressMiddleware } from "@apollo/server/express4";

import { apolloServer } from "./apollo/apolloServer";
import "./mongo-connections";
import { getSecret } from "./utils/getSecret";

const app = express();

const startServer = async () => {
  await apolloServer.start();
  app.use(
    "/graphql",
    express.json(),
    expressMiddleware(apolloServer, {
      context: async ({ req, res }) => {
        const token = req.headers.authorization;

        if (token) {
          try {
            const tokendata = jwt.verify(token, getSecret()) as any;

            return { userId: tokendata?.userId };
          } catch {
            return { userId: null };
          }
        }

        return { userId: null };
      },
    })
  );

  app.listen(4000, () => {
    console.log("server started on 4000");
  });
};

startServer();
