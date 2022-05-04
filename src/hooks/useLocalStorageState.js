import { useEffect, useState } from "react";

const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    const savedValue = localStorage.getItem(key);
    return savedValue !== null ? savedValue : defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorageState;
