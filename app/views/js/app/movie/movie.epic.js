import {ajax} from 'rxjs';
import {fetchMovieFulfilled} from './movie.action';

const fetchMoviesEpic = action$ =>
  action$.ofType('FETCH_MOVIE')
    .mergeMap(action =>
      ajax.getJSON(`https://localhost:3000/movie/${action.payload}`)
        .map(response => fetchMovieFulfilled(response))
    );
