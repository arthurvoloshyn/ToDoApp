import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, defaulVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaulVal, () => {
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

  return [state, dispatch];
};

export default useLocalStorageReducer;
