import React, { Suspense, lazy } from 'react';
import { hot } from 'react-hot-loader';

import LoadingPage from './components/LoadingPage/';

const TodoApp = lazy(
  () =>
    new Promise(resolve => {
      setTimeout(() => resolve(import('./components/TodoApp')), 3000);
    })
);

const Loading = <LoadingPage />;

const App = () => (
  <div>
    <Suspense fallback={Loading}>
      <TodoApp />
    </Suspense>
  </div>
);

export default hot(module)(App);
