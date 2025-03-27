import { Transactions } from "../../transaction/model/transactionModel";
import { IUserDocument } from "../@types";

export const userResolvers = {
  transactionsForUser: async (parent: IUserDocument) => {
    return await Transactions.find({ userId: parent._id });
  },

  transactionCount: async (parent: IUserDocument) => {
    return await Transactions.countDocuments({ userId: parent.id });
  },
  totalAmount: async (parent: IUserDocument) => {
    console.log(parent._id);
    const [total] = await Transactions.aggregate([
      {
        $match: {
          userId: String(parent._id),
        },
      },
      {
        $group: {
          _id: "$userId",
          totalAmount: { $sum: "$amount" },
        },
      },
    ]);

    return total.totalAmount;
  },
};
