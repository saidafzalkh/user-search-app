export const validateEmail = (email: string) => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateNumber = (number: string) => {
  return /^[0-9]{2}(-[0-9]{2}){2}$/.test(number);
};
