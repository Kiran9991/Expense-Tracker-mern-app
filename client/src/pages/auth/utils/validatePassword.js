export const validatePassword = (password, confirmPassword) => {
  if (password.length < 6) return false;
  if (confirmPassword) if (password !== confirmPassword) return false;
  return true;
};
