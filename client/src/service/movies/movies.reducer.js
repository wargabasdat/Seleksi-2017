import {FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED, FETCH_MOVIES_PENDING} from './movies.constants';
import {REHYDRATE} from 'redux-persist/constants';

export const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: null
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FETCH_MOVIES_PENDING: {
      return {
        ...state,
        fetching: true
      };
    }
    case FETCH_MOVIES_REJECTED: {
      return {
        ...state,
        fetching: false,
        error: action.payload
      };
    }
    case FETCH_MOVIES_FULFILLED: {
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: action.payload
      };
    }
    case REHYDRATE: {
      let movies = action.payload.movies;
      if (movies) {
        return {
          ...state,
          ...movies
        };
      }
      return state;
    }
    default:
      return state;
  }
};
