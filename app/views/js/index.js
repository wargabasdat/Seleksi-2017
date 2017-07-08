// Babel polyfill will emulate a full ES2015 environemnt so we can enjoy goodies
// like Promises

// import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import App from './components/App';

render(
  <Router>
    <App />
  </Router>,
  document.getElementById('app')
);
