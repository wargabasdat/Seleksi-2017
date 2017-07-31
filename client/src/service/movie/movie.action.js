import {FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED, FETCH_MOVIE_PENDING} from './movie.constants';

export const fetchMovie = (payload) => ({
  type: FETCH_MOVIE_PENDING,
  payload
});

export const fetchMovieFulfilled = (payload) => ({
  type: FETCH_MOVIE_FULFILLED,
  payload
});

export const fetchMovieRejected = (payload) => ({
  type: FETCH_MOVIE_REJECTED,
  payload
});
