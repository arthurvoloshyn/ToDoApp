import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, defaultVal, reducer) => {
  const [state, dispatch] = useReducer(reducer, defaultVal, () => {
    let val;

    try {
      val = JSON.parse(window.localStorage.getItem(key) || `${defaultVal}`);
    } catch {
      val = defaultVal;
    }

    return val;
  });

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
