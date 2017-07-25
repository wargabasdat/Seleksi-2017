import {FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED, FETCH_MOVIES_PENDING} from './movie.constants';

export const fetchMovie = (payload) => ({
  type: FETCH_MOVIES_PENDING,
  payload
});

export const fetchMovieFulfilled = (payload) => ({
  type: FETCH_MOVIES_FULFILLED,
  payload
});

export const fetchMovieRejected = (payload) => ({
  type: FETCH_MOVIES_REJECTED,
  payload
});
