import React, { useContext } from 'react';
import propTypes from 'prop-types';
import uuid from 'uuid';

import TextField from '@material-ui/core/TextField';

import { EDIT } from '~/constants';

import useInputState from '~/hooks/useInputState';

import { Dispatchcontext } from '~/context/todos.context';

import { formStyles, divStyles } from './styles';

const EditTodoForm = ({ id, task, toggleEditForm }) => {
  const dispatch = useContext(Dispatchcontext);
  const [value, handleChange, reset] = useInputState(task);

  return (
    <div style={divStyles}>
      <form
        onSubmit={event => {
          event.preventDefault();
          dispatch({ type: EDIT, id, task: value });
          reset();
          toggleEditForm();
        }}
        style={formStyles}
      >
        <TextField margin="normal" value={value} onChange={handleChange} fullWidth autoFocus />
      </form>
    </div>
  );
};

EditTodoForm.propTypes = {
  id: propTypes.oneOfType([propTypes.number, propTypes.string]),
  task: propTypes.string,
  toggleEditForm: propTypes.func
};

EditTodoForm.defaultProps = {
  id: uuid(),
  task: 'New task',
  toggleEditForm: () => {}
};

export default EditTodoForm;
