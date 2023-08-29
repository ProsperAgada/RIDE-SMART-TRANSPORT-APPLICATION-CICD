export const rmSpecialCharacters = (str: string): string => {
  const regex = /[\W_]+/g;
  // Remove the special characters and spaces from the string
  const result = str.replace(regex, "");
  return result;
};
