/**
 * Redux import
 */
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';

/**
 * Import rxjs ajax
 */
import { ajax } from 'rxjs/observable/dom/ajax';

/**
 * Add redux middleware
 */
import {createLogger} from 'redux-logger';

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
import movieReducer from './movie/movie.reducer';
import { fetchMoviesEpic } from './movie/movie.epic';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  pingReducer,
  movieReducer
});

const epics = combineEpics(
  pingEpic,
  fetchMoviesEpic
);

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: { getJSON: ajax.getJSON }
});
// const epicMiddleware = createEpicMiddleware(pingEpic);
const middleware = applyMiddleware(createLogger());

export default createStore(
  reducers,
  middleware,
  composeEnhancers(applyMiddleware(epicMiddleware))
);
