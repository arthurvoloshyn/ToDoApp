import React, { useContext, Fragment } from 'react';

import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';

import { TodosContext } from '~/context/todos.context';

import Todo from '~/components/Todo/';

const TodoList = () => {
  const todos = useContext(TodosContext);
  const todosLength = todos.length - 1;

  return todos.length ? (
    <Paper>
      <List>
        {todos.map((todo, i) => (
          <Fragment key={todo.id}>
            <Todo {...todo} />
            {i < todosLength && <Divider />}
          </Fragment>
        ))}
      </List>
    </Paper>
  ) : null;
};

export default TodoList;
