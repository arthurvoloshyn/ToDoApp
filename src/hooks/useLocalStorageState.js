import { useState, useEffect } from 'react';

const useLocalStorageReducer = (key, defaulVal) => {
  const [state, setState] = useState(() => {
    let val;

    try {
      val = JSON.parse(window.localStorage.getItem(key) || String(defaulVal));
    } catch {
      val = defaulVal;
    }

    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, setState];
};

export default useLocalStorageReducer;
