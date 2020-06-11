import React from 'react';
import propTypes from 'prop-types';

import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';

import { TodosProvider } from '~/context/todos.context';

import TodoList from '../TodoList';

import TodoForm from '../TodoForm';

import { PaperStyles, AppBarStyles, GridStyles } from './styles';

const TodoApp = ({ elevation }) => (
  <Paper style={PaperStyles} elevation={elevation}>
    <AppBar color="primary" position="static" style={AppBarStyles}>
      <Toolbar>
        <Typography color="inherit"> REACT TODO APP </Typography>
      </Toolbar>
    </AppBar>
    <Grid container justify="center" style={GridStyles}>
      <Grid item xs={11} md={8} lg={4}>
        <TodosProvider>
          <TodoForm />
          <TodoList />
        </TodosProvider>
      </Grid>
    </Grid>
  </Paper>
);

TodoApp.propTypes = {
  elevation: propTypes.number
};

TodoApp.defaultProps = {
  elevation: 0
};

export default TodoApp;
