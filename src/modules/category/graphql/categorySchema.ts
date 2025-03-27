export const categorySchemaTypes = `
  type Category {
    _id: String
    name: String 
    status: String
    description: String

    transactionsForCategory: [Transaction]
    transactionCount: Int
  }

  
`;

export const categorySchemaQueries = `
  getCategories:[Category],
  getCategory(id: String!): Category,
`;
export const categorySchemaMutations = `
    createCategory(name: String!, status: String!, description: String! ): Category
    updateCategory(status: String!, name: String!, description: String!): Category
    deleteCategory(id: String!): String
`;
