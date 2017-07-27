'use strict';

const express = require('express');
const router = express.Router();
const thisMonth = require('../components/month');
var movie = require('../models/movieSchema').movieModel;
var winston = require('../components/winston');

var errorHandlerAPI = (type, message) => {
  let res = {};
  res['response'] = type;
  res['message'] = message;
  return res;
};

var ratingService = (type) => {
  if (type === 'imdb') return 'Internet Movie Database';
  if (type === 'rotten') return 'Rotten Tomatoes';
  if (type === 'metacritic') return 'Metacritic';
};

router.get('/:id?', (req, res, next) => {
  if (!req.params.id) {
    movie.find({}, (err, movies) => {
      if (err) {
        winston.error(err);
        next(err);
      }
      res.status(200).send(movies);
    });
  } else {
    movie.findOne({ id: req.params.id }, (err, movies) => {
      if (err) {
        winston.error(err);
        next(err);
      }
      res.status(200).send(movies);
    });
  }
});

router.get('/imdb/:id', (req, res, next) => {
  if (!req.params.id) {
    winston.verbose('please input imdb id');
    res.status(404).send(errorHandlerAPI('404 Not Found', 'please input imdb id'));
  } else {
    let id = req.params.id;
    if (!/tt\d{7}/g.test(id)) {
      winston.verbose('invalid imdb id');
      res.status(400).send(errorHandlerAPI('400 Bad Request', 'Invalid imdb id'));
    } else {
      movie.findOne({ imdb_id: req.params.id }, (err, movies) => {
        if (err) {
          winston.error(err);
          next(err);
        }
        res.status(200).send(movies);
      });
    }
  }
});

router.get('/search/title/:search', (req, res, next) => {
  movie.find({ title: { $regex: new RegExp('^' + req.params.search.toLowerCase(), 'i') } }, (err, movies) => {
    if (err) {
      winston.error(err);
      next(err);
    }
    if (movies) {
      var movieMap = {};
      movies.forEach((mov) => {
        movieMap[mov._id] = mov;
      });
      res.status(200).send(movieMap);
    }
  });
});

router.get('/genre/:search/:rating?', (req, res, next) => {
  var rating;
  if (req.params.rating) {
    rating = ratingService(req.params.rating);
  } else {
    rating = 'Internet Movie Database';
  }

  let matchCond = {};
  matchCond['genres.name'] = new RegExp('^' + req.params.search.toLowerCase(), 'i');
  matchCond['rating.' + thisMonth + '.Source'] = rating;

  movie.aggregate({
    $match: matchCond
  }, {
    $project: {
      title: '$title',
      /* ratingSort: {
                $filter: {
                    input: '$rating.' + thisMonth,
                    as: 'ratingSorted',
                    cond: {
                        $ne: ['$$ratingSorted.Value', '7%']
                    }
                }
            }, */
      ratingList: '$rating.' + thisMonth
      /* genres: {
                    $filter: {
                        input: '$genres',
                        as: 'genre',
                        cond: { $eq: ['$$genre.name', new RegExp("^" + req.params.search.toLowerCase(), "i")] }
                    }
                } */
    }
  }).sort({ 'ratingList': 1 }).exec((err, movies) => {
    if (err) {
      winston.error(err);
      next(err);
    }
    if (movies) {
      var movieMap = {};
      var i = 0;
      movies.forEach((mov) => {
        movieMap[i] = mov;
        i++;
      });
      res.status(200).json(movieMap);
    }
  });
});

module.exports = router;
