'use strict';

/**
 * MIT License
 * Copyright (c) 2017 Dimitar Andreev
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 * 
 * modified by Ray Andrew (http://github.com/ironlota)
 * to get omdb data and update data in database
 */

const request = require('request');
const thisMonth = require('../month');

const ERR_STATUS = 34;

let instance = null;

class TmdbApi {
  _getUrl (path) {
    return `${this.baseUrl}${path.join('/')}?api_key=${this.apiTmdbKey}&language=en-US`;
  }

  _getOmdbUrl (path) {
    return `${this.baseOmdbUrl}?apikey=${this.apiOmdbKey}&${path.join('&')}`;
  }

  constructor (apiTmdb, apiOmdb) {
    if (!instance) instance = this;

    this.baseUrl = 'http://api.themoviedb.org/3/';
    this.baseOmdbUrl = 'http://www.omdbapi.com/';
    this.apiTmdbKey = apiTmdb;
    this.apiOmdbKey = apiOmdb;

    return instance;
  }

  getLatestId (done) {
    let path = ['movie', 'latest'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid latest id'), body);
      }

      body.id = parseInt(body.id, 10);
      if (!body.id) return done(new Error('Could not parse int id'), body.id);

      done(null, body.id);
    });
  }

  getMovieDetails (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(e);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for movie'), body);
      }

      done(null, body);
    });
  }

  getMovieImages (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id, 'images'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for movie images'), body);
      }

      done(null, body);
    });
  }

  getMovieVideos (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id, 'videos'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for movie videos'), body);
      }

      done(null, body);
    });
  }

  getMovieKeywords (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id, 'keywords'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for movie keywords'), body);
      }

      done(null, body);
    });
  }

  getMovieSimilar (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id, 'similar'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('results') || !body.results) {
        return done(new Error('Invalid response for movie similar'), body);
      }

      done(null, body);
    });
  }

  getMovieRecommendations (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id, 'recommendations'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for movie recommendations'), body);
      }

      done(null, body);
    });
  }

  getMovieCredits (id, done) {
    if (!id) return done(new Error('Invalid movie id'));
    let path = ['movie', id, 'credits'];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for movie credits'), body);
      }

      done(null, body);
    });
  }

  getPersonDetails (id, done) {
    if (!id) return done(new Error('Invalid person id'));
    let path = ['person', id];
    request(this._getUrl(path), (err, response) => {
      if (err) return done(err);
      let body;
      try {
        body = JSON.parse(response.body);
      } catch (e) {
        return done(err);
      }

      if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
        return done(null);
      }

      if (!body.hasOwnProperty('id') || !body.id) {
        return done(new Error('Invalid response for person'), body);
      }

      done(null, body);
    });
  }

  getInfoFromOmdb (id, done) {
    if (!/tt\d{7}/g.test(id) || (!id)) {
      return done(new Error('Invalid imdb id'));
    } else {
      let path = ['i=' + id, 'plot=full'];
      request(this._getOmdbUrl(path), (err, response) => {
        if (err) return done(err);
        let body;
        try {
          body = JSON.parse(response.body);
        } catch (e) {
          return done(err);
        }

        if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
          return done(null);
        }

        let ratingThisMonth = {};
        ratingThisMonth[thisMonth] = body.Ratings;

        let omdb = {
          ratings: ratingThisMonth,
          box_office: body.BoxOffice,
          alternative_image: body.Poster,
          rated: body.Rated,
          plot: body.Plot
        };

        done(null, omdb);
      });
    }
  }

  getInfoByTitleFromOmdb (title, year, done) {
    if (!title || !year) {
      return done(new Error('Invalid title and year'));
    } else {
      let path = ['t=' + title, 'y' + year, 'plot=full'];
      request(this._getOmdbUrl(path), (err, response) => {
        if (err) return done(err);
        let body;
        try {
          body = JSON.parse(response.body);
        } catch (e) {
          return done(err);
        }

        if (body.hasOwnProperty('status_code') && body.status_code === ERR_STATUS) {
          return done(null);
        }

        let ratingThisMonth = {};
        ratingThisMonth[thisMonth] = body.Ratings;

        let omdb = {
          ratings: ratingThisMonth,
          box_office: body.BoxOffice,
          alternative_image: body.Poster,
          rated: body.Rated,
          plot: body.Plot
        };

        done(null, omdb);
      });
    }
  }
}

module.exports = TmdbApi;
