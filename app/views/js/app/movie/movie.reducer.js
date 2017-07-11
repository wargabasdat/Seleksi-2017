export const initialState = {
  fetching: false,
  fetched: false,
  movies: [],
  error: null
};

export default (state = initialState, action) => {
  switch(action.type) {
    case "FETCH_MOVIES_PENDING": {
      return {...state, fetching: true};
      break;
    }
    case "FETCH_MOVIES_REJECTED": {
      return {...state, fetching: false, error: action.payload};
      break;
    }
    case "FETCH_MOVIES_FULFILLED": {
      return {
        ...state,
        fetching: false,
        fetched: true,
        movies: action.payload
      };
      break;
    }
  }
  return state;
};
