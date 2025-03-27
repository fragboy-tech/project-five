import {
  userSchemaMutations,
  userSchemaQueries,
  userSchemaTypes,
} from "../../modules/user/graphql/userSchema";

import {
  transactionSchemaTypes,
  transactionSchemaQueries,
  transactionSchemaMutations,
} from "../../modules/transaction/graphql/transactionSchema";

import {
  categorySchemaTypes,
  categorySchemaQueries,
  categorySchemaMutations,
} from "../../modules/category/graphql/categorySchema";

export const apolloSchema = `
  ${userSchemaTypes}
  ${transactionSchemaTypes}
  ${categorySchemaTypes}

  type Query {
    ${userSchemaQueries}
    ${transactionSchemaQueries}
    ${categorySchemaQueries}
  }

  type Mutation {
   ${userSchemaMutations}
   ${transactionSchemaMutations}
   ${categorySchemaMutations}
  }


  
`;
