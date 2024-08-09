export const validateEmail = (email: string): boolean => {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
};

export const validateNumber = (number: string): boolean => {
  return /^\d{6}$/.test(number);
};
