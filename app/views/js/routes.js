// ./src/routes.js
import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './components/common/HomePage';
import About from './components/common/AboutPage';
import App from './components/App';
import NotFound from './components/common/NotFoundPage';

export default (
  <main>
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/home' component={Home} />
      <Route path='/about' component={About} />
      <Route path='/404' component={NotFound} />
    </Switch>
  </main>
);
