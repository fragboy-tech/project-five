export const getSecret = () => {
  return process.env.SECRET || "secret";
};
