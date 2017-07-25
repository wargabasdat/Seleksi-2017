import { Observable } from 'rxjs';
import {fetchMovieFulfilled, fetchMovieRejected} from './movie.action';
import {FETCH_MOVIES_PENDING, MOVIES_API_URL} from './movie.constants';

export const fetchMoviesEpic = (action$, store, {getJSON}) =>
  action$.ofType(FETCH_MOVIES_PENDING)
    .mergeMap(action =>
      getJSON(`${MOVIES_API_URL}` + `${action.payload}`)
        .map(response => fetchMovieFulfilled(response))
        .catch(error => Observable.of(fetchMovieRejected(error.xhr.response.message)))
    );
