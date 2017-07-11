/**
 * Redux import
 */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

/**
 * Add redux middleware
 */
import {createLogger} from 'redux-logger';
// import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';

/**
 * Add RxJs support from redux-observable
 */
import { createEpicMiddleware, combineEpics } from 'redux-observable';

/**
 * import pingpong
 */
import pingReducer from './pingpong/pingpong.reducer';
import { pingEpic } from './pingpong/pingpong.epic';

/**
 * import movies
 */
/*import movieReducer from './movie/movie.reducer';
import { fetchMoviesEpic } from './movie/movie.epic';*/

/*const reducers = combineReducers({
  pingReducer,
  movieReducer
});*/

/*const epics = combineEpics({
  pingEpic,
  fetchMoviesEpic
});*/

// const epicMiddleware = createEpicMiddleware(epics);
const epicMiddleware = createEpicMiddleware(pingEpic);
const middleware = applyMiddleware(promise(), createLogger());

/*export default createStore(
  reducers,
  middleware,
  composeEnhancers(applyMiddleware(epicMiddleware))
);*/


export default createStore(
  pingReducer,
  applyMiddleware(epicMiddleware),
  middleware
);
