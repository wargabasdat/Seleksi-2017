import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import App from './App';
import Home from './common/HomePage';
import About from './common/AboutPage';
import NotFound from './common/NotFoundPage';
import Router from 'react-router';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/404' component={NotFound} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
};

export default Main;
