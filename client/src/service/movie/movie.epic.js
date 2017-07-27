import { Observable } from 'rxjs';
import {fetchMovieFulfilled, fetchMovieRejected} from './movie.action';
import {FETCH_MOVIE_PENDING, MOVIE_API_URL} from './movie.constants';

export const fetchMovieEpic = (action$, store, {getJSON}) =>
  action$.ofType(FETCH_MOVIE_PENDING)
    .mergeMap(action =>
      getJSON(`${MOVIE_API_URL + action.payload}`)
        .map(response => fetchMovieFulfilled(response))
        .catch(error => Observable.of(fetchMovieRejected(error.xhr.response.message)))
    );
