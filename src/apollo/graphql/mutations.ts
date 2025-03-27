import { userMutations } from "../../modules/user/graphql/userMutations";
import { transactionMutations } from "../../modules/transaction/graphql/transactionMutations";
import { categoryMutations } from "../../modules/category/graphql/categoryMutations";

export const mutations = {
  ...userMutations,
  ...transactionMutations,
  ...categoryMutations,
};
