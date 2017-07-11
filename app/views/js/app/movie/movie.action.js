export const fetchMovie = (id) => ({
  type: 'FETCH_MOVIE',
  payload: id
});

export const fetchMovieFulfilled = (payload) => ({
  type: 'FETCH_MOVIE',
  payload
});
