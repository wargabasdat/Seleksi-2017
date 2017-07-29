import { combineEpics } from 'redux-observable';
import { fetchMovieEpic } from './movie/movie.epic';
import { fetchMoviesEpic } from './movies/movies.epic';

const epics = combineEpics(
  fetchMovieEpic,
  fetchMoviesEpic
);

export default epics;
