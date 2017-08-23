import {FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED, FETCH_MOVIES_PENDING} from './movies.constants';

export const fetchMovies = () => ({
  type: FETCH_MOVIES_PENDING
});

export const fetchMoviesFulfilled = (payload) => ({
  type: FETCH_MOVIES_FULFILLED,
  payload
});

export const fetchMoviesRejected = (payload) => ({
  type: FETCH_MOVIES_REJECTED,
  payload
});
