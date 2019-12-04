import { useState } from 'react';

const useToggle = (initialValue = false) => {
  const [state, setValue] = useState(initialValue);

  const toggle = () => {
    setValue(!state);
  };

  return [state, toggle];
};

export default useToggle;
