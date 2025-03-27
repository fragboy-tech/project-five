import { Transactions } from "../../transaction/model/transactionModel";
import { ICategory } from "../model/categoryModel";

export const categoryResolvers = {
  transactionsForCategory: async (_parent: ICategory) => {
    return await Transactions.find({ categoryId: { $eq: _parent._id } });
  },

  transactionCount: async (parent: ICategory) => {
    return await Transactions.countDocuments({ categoryId: parent.id });
  },
};
