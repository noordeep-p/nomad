import { useState, useEffect } from 'react';

function getStorageValue(key, defaultValue) {
  const saved = localStorage.getItem(key);
  const initial = saved;
  return initial || defaultValue;
}

const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => getStorageValue(key, defaultValue));
  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return [value, setValue];
};

export default useLocalStorage;
