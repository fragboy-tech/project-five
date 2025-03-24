export const userSchemaTypes = `
  type User {
    email: String 
    userName: String

    test: String
  }
`;

export const userSchemaQueries = `
  profile: User
`;

export const userSchemaMutations = `
  register(userName: String!, password: String!, email: String! ): Boolean
  login(email: String!, password: String!): String
`;
