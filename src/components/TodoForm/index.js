import React, { useContext } from 'react';

import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';

import { ADD } from '~/constants';

import useInputState from '~/hooks/useInputState';

import { DispatchContext } from '~/context/todos.context';

import { PaperStyles } from './styles';

const TodoForm = () => {
  const [value, handleChange, reset] = useInputState('');
  const dispatch = useContext(DispatchContext);

  const onSubmit = event => {
    event.preventDefault();
    dispatch({ type: ADD, task: value });
    reset();
  };

  return (
    <Paper style={PaperStyles}>
      <form onSubmit={onSubmit}>
        <TextField
          value={value}
          onChange={handleChange}
          margin="normal"
          label="Add new Todo"
          fullWidth
        />
      </form>
    </Paper>
  );
};

export default TodoForm;
