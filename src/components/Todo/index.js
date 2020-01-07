import React, { memo, useContext } from 'react';
import propTypes from 'prop-types';
import uuid from 'uuid';

import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';

import { REMOVE, TOGGLE } from '~/constants';

import { Dispatchcontext } from '~/context/todos.context';

import useToggle from '~/hooks/useToggle';

import EditTodoForm from '../EditTodoForm';

import { ListItemStyles, ListItemTextStyles } from './styles';

const Todo = ({ task, completed, id }) => {
  const [isEditing, toggle] = useToggle(false);
  const dispatch = useContext(Dispatchcontext);
  const styles = ListItemTextStyles(completed);
  const tabIndex = -1;

  return (
    <ListItem style={ListItemStyles}>
      {isEditing ? (
        <EditTodoForm id={id} task={task} toggleEditForm={toggle} />
      ) : (
        <>
          <Checkbox tabIndex={tabIndex} checked={completed} onClick={() => dispatch({ type: TOGGLE, id })} />
          <ListItemText style={styles}>{task}</ListItemText>
          <ListItemSecondaryAction>
            <IconButton aria-label="Delete" onClick={() => dispatch({ type: REMOVE, id })}>
              <DeleteIcon />
            </IconButton>
            <IconButton aria-label="Edit" onClick={toggle}>
              <EditIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </>
      )}
    </ListItem>
  );
};

Todo.propTypes = {
  id: propTypes.string,
  task: propTypes.string,
  completed: propTypes.bool
};

Todo.defaultProps = {
  id: uuid(),
  task: 'New task',
  completed: false
};

export default memo(Todo);
