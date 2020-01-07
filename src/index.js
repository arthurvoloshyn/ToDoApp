import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom';

import '@babel/polyfill';

import * as serviceWorker from './serviceWorker';

import DefaultErrorBoundary from './components/DefaultErrorBoundary/';

import App from './App';

import './assets/css/styles.css';

if (process.env.NODE_ENV === 'development') {
  const axe = require('react-axe');
  axe(React, ReactDOM, 1000);
}

ReactDOM.render(
  <StrictMode>
    <DefaultErrorBoundary>
      <App />
    </DefaultErrorBoundary>
  </StrictMode>,
  document.getElementById('app')
);

serviceWorker.register();
