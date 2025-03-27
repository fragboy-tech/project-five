import { Categories } from "../../category/model/categoryModel";
import { ITransaction } from "../model/transactionModel";

export const transactionResolvers = {
  categoryOfTransaction: async (parent: ITransaction) => {
    return Categories.findOne({ _id: parent.categoryId });
  },
};
