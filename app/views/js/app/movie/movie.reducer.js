import {FETCH_MOVIES_FULFILLED, FETCH_MOVIES_REJECTED, FETCH_MOVIES_PENDING} from './movie.constants';

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
    default:
      return state;
  }
};
