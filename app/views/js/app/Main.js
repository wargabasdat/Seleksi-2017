import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import Home from './common/HomePage';
import About from './common/AboutPage';
import NotFound from './common/NotFoundPage';
import PingPong from './pingpong/pingpong.components';
import Movie from './movie/movie.component';

const Main = () => {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/404' component={NotFound} />
        <Route path='/movie' component={Movie} />
        <Route path='/pingpong' component={PingPong} />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
};

export default Main;
