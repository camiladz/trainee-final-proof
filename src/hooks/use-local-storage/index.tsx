import { useState } from "react";
import { getItem, setItem } from "../../helpers/local-storage";

export const useLocalStorage = <T = unknown,>(
  itemName: string,
  defaultValue: T,
  isJson = false
): [T, (newValue: T) => void] => {
  const [localStorageValue, setLocalStorageValue] = useState<T>(
    getItem(itemName, isJson) ?? defaultValue
  );

  const setLocalStorage = (value: T) => {
    setLocalStorageValue(value);

    const parsedValue = isJson ? JSON.stringify(value) : value;
    setItem(itemName, parsedValue as string);
  };

  return [localStorageValue, setLocalStorage];
};
