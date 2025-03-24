import {
  userSchemaMutations,
  userSchemaQueries,
  userSchemaTypes
} from "../../modules/user/graphql/userSchema";

export const apolloSchema = `
  ${userSchemaTypes}

  type Query {
    ${userSchemaQueries}
  }

  type Mutation {
   ${userSchemaMutations}
  }

  
`;
