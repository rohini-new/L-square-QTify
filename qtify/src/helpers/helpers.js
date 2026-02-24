export const truncate = (input, length) => {
  if (!input) return "";
  return input.length > length ? input.substring(0, length) + "..." : input;
};
