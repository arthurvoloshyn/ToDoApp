import { useState } from 'react';

export default initialValue => {
  const [value, setValue] = useState(initialValue);

  const handleChange = ({ target: { value } }) => {
    setValue(value);
  };

  const reset = () => {
    setValue('');
  };

  return [value, handleChange, reset];
};
