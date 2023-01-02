export const trimText = (text = "", maxLength = 5) => {
  if (text.length <= maxLength) {
    return text;
  }

  return `${text.slice(0, maxLength)}...`;
};

export const capitalizeText = (text = "") => {
  return `${text.charAt(0).toUpperCase()}${text.slice(1)}`;
};
