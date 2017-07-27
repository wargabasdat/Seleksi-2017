import { combineEpics } from 'redux-observable';
import { pingEpic } from './pingpong/pingpong.epic';
import { fetchMovieEpic } from './movie/movie.epic';
import { fetchMoviesEpic } from './movies/movies.epic';

const epics = combineEpics(
  pingEpic,
  fetchMovieEpic,
  fetchMoviesEpic
);

export default epics;
