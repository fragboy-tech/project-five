import { userQueries } from "../../modules/user/graphql/userQueries";
import { transactionQueries } from "../../modules/transaction/graphql/transactionQueries";
import { catagoriesQueries } from "../../modules/category/graphql/categoryQueries";

export const queries = {
  ...userQueries,
  ...transactionQueries,
  ...catagoriesQueries,
};
