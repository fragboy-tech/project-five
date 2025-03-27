export const getSecret = () => {
  return process.env.SECRET_KEY || "token";
};
