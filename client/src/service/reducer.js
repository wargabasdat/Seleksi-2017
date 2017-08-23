import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import movieReducer from './movie/movie.reducer';
import moviesReducer from './movies/movies.reducer';

export const RESET_REDUX_STATE = 'RESET_REDUX_STATE';

const appReducer = combineReducers({
  movie: movieReducer,
  movies: moviesReducer,
  routing: routerReducer
});

const rootReducer = (state, action) => {
  if (action.type === RESET_REDUX_STATE) state = undefined;
  return appReducer(state, action);
};

export default rootReducer;
