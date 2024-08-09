export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateNumber = (number: string): boolean => {
  return /^[0-9]{2}(-[0-9]{2}){2}$/.test(number);
};
