import { Categories } from "../model/categoryModel";

export const catagoriesQueries = {
  getCategories: async (_parent: null) => {
    return await Categories.find();
  },

  getCategory: async (_parent: null, args: { id: string }) => {
    return await Categories.findById({ _id: args.id });
  },
};
