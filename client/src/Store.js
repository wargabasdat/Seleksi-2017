import { createStore, applyMiddleware, compose } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { createLogger } from 'redux-logger';
import epics from './service/epic';
import reducers from './service/reducer';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: { getJSON: ajax.getJSON }
});

const browserHistory = createHistory();
const middleware = applyMiddleware(createLogger(), routerMiddleware(browserHistory));

const store = createStore(
  reducers,
  compose(
    middleware,
    composeEnhancers(applyMiddleware(epicMiddleware))
  )
);

const history = syncHistoryWithStore(browserHistory, store);

export {store, history};
