import React from 'react';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import TodoList from '../../containers/TodoList';
import TodoForm from '../TodoForm';
import { TodosProvider } from '../../context/todos.context';
import { PaperStyles, AppBarStyles, GridStyles } from './styles';

const TodoApp = () => (
  <Paper style={PaperStyles} elevation={0}>
    <AppBar color="primary" position="static" style={AppBarStyles}>
      <Toolbar>
        <Typography color="inherit"> REACT TODO APP </Typography>
      </Toolbar>
    </AppBar>
    <Grid container justify={'center'} style={GridStyles}>
      <Grid item xs={11} md={8} lg={4}>
        <TodosProvider>
          <TodoForm />
          <TodoList />
        </TodosProvider>
      </Grid>
    </Grid>
  </Paper>
);

export default TodoApp;
