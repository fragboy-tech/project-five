import { checkLogin } from "../../../utils/checkLogin";
import { Transactions } from "../model/transactionModel";

export const transactionMutations = {
  createTransaction: async (
    _parent: null,
    args: {
      amount: Number;
      categoryId: String;
      date: String;
      description: String;
      type: String;
      userId: String;
    },
    { userId }: any
  ) => {
    checkLogin(userId);

    const createdTransaction = await Transactions.create({
      amount: args.amount,
      categoryId: args.categoryId,
      date: args.date,
      description: args.description,
      type: args.type,
      userId,
    });

    return createdTransaction;
  },

  updateTransaction: async (
    _parent: null,
    args: {
      id: string;
      amount: Number;
      categoryId: String;
      date: String;
      description: String;
      type: String;
      userId: String;
    }
  ) => {
    const updatedTransaction = await Transactions.findOneAndUpdate(
      { _id: args.id },
      { $set: args }
    );
    return updatedTransaction;
  },

  deleteTransaction: async (_parent: null, args: { id: string }) => {
    const deletedTransaction = await Transactions.findByIdAndDelete({
      _id: args.id,
    });
    return deletedTransaction;
  },
};
