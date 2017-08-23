import React from 'react';
import {Switch, Route, Redirect} from 'react-router-dom';
import About from './common/pages/AboutPage';
import NotFound from './common/pages/NotFoundPage';
import Movie from './service/movie/movie.component';
import Movies from './service/movies/movies.component';
import Search from './common/Search';
import Genre from './service/genre/genre.component';

const App = () => {
  return (
    <div style={{ height: '100%' }}>
      <Switch>
        <Route exact path='/' component={Movies} />
        <Route path='/about' component={About} />
        <Route path='/search' component={Search} />
        <Route path='/404' component={NotFound} />
        <Route path='/movie/:id' component={Movie} />
        <Route path='/genre/:genre?' component={Genre} />
        <Redirect from='/public/*' to='/' />
        <Redirect to='/404' />
      </Switch>
    </div>
  );
};

export default App;
