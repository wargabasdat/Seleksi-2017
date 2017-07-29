import { createStore, applyMiddleware, compose } from 'redux';
import { Observable } from 'rxjs';
import { createEpicMiddleware } from 'redux-observable';
import { ajax } from 'rxjs/observable/dom/ajax';
import { createLogger } from 'redux-logger';
import epics from './service/epic';
import reducers from './service/reducer';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';
import {persistStore, autoRehydrate} from 'redux-persist'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const epicMiddleware = createEpicMiddleware(epics, {
  dependencies: { getJSON: ajax.getJSON, Observable: Observable }
});

const browserHistory = createHistory();
const middleware = applyMiddleware(createLogger(), routerMiddleware(browserHistory));

const store = createStore(
  reducers,
  compose(
    middleware,
    composeEnhancers(applyMiddleware(epicMiddleware)),
    autoRehydrate()
  )
);

persistStore(store);
const history = syncHistoryWithStore(browserHistory, store);

export {store, history};
