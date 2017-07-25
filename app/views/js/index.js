// Babel polyfill will emulate a full ES2015 environemnt so we can enjoy goodies
// like Promises

import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import 'rxjs';
import {BrowserRouter as Router} from 'react-router-dom';
import App from './app/App';
import store from './app/store';

const Index = () => {
  return (
    <Router>
      <App />
    </Router>
  );
};

render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('app')
);

export default Index;
