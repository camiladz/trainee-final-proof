export const getItem = (itemName: string, isJson = false) => {
  const itemValue = window.localStorage.getItem(itemName);

  if (!itemValue) return;

  if (isJson) return JSON.parse(itemValue);

  return itemValue;
};
