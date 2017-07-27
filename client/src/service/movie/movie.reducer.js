import {FETCH_MOVIE_FULFILLED, FETCH_MOVIE_REJECTED, FETCH_MOVIE_PENDING} from './movie.constants';

export const initialState = {
  fetching: false,
  fetched: false,
  movie: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIE_PENDING: {
      return {
        ...state,
        fetching: true
      };
    }
    case FETCH_MOVIE_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case FETCH_MOVIE_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        movie: action.payload
      };
    }
    default:
      return state;
  }
};
