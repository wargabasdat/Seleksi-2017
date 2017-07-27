import { Observable } from 'rxjs';
import { fetchMoviesFulfilled, fetchMoviesRejected } from './movies.action';
import { FETCH_MOVIES_PENDING, MOVIES_API_URL } from './movies.constants';

export const fetchMoviesEpic = (action$, store, {getJSON}) =>
  action$.ofType(FETCH_MOVIES_PENDING)
    .mergeMap(() =>
      getJSON(`${MOVIES_API_URL}`)
        .map(response => fetchMoviesFulfilled(response))
        .catch(error => Observable.of(fetchMoviesRejected(error.xhr.response.message)))
    );
