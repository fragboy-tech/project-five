export const checkLogin = (userId?: string) => {
  if (!userId) {
    throw new Error("Login!!");
  }
};
