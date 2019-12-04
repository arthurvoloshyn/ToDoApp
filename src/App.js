import React from 'react';
import { hot } from 'react-hot-loader';
import TodoApp from './components/TodoApp/';

const App = () => (
  <div>
    <TodoApp />
  </div>
);

export default hot(module)(App);
