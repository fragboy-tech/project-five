export const transactionSchemaTypes = `
type Transaction {
  amount: String
  categoryId: String
  date: String
  description: String
  type: String
  userId: String

  categoryOfTransaction: Category
  }
`;
export const transactionSchemaQueries = `
  getTransaction(id: String!): Transaction
  getTransactions: [Transaction]
`;

export const transactionSchemaMutations = `
  createTransaction(amount: String!, categoryId: String!, date: String!, type: String!): Transaction
  updateTransaction(id: String! , amount: String!, category: String!, date: String!, type: String!, userId: String!): String
  deleteTransaction(id: String!): String
`;
