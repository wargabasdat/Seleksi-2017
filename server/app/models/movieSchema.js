'use strict';

const mongoose = require('mongoose');
const config = require('config');
const monthMongoose = require('./monthSchema');

var movieSchema = new mongoose.Schema({
  adult: { type: String },
  backdrop_path: { type: String },
  belongs_to_collection: { type: Boolean },
  budget: { type: Number },
  genres: { type: Array },
  homepage: { type: String },
  id: { type: Number, index: { unique: true, dropDups: true } },
  imdb_id: { type: String },
  original_language: { type: String },
  original_title: { type: String },
  overview: { type: String },
  popularity: { type: Number },
  poster_path: { type: String },
  production_companies: { type: Array },
  production_countries: { type: Array },
  release_date: { type: Date },
  revenue: { type: Number },
  runtime: { type: Number },
  spoken_languages: { type: Array },
  status: { type: String },
  tagline: { type: String },
  title: { type: String },
  video: { type: Boolean },
  vote_average: { type: Number },
  vote_count: { type: Number },
  rated: { type: String }, // omdb
  plot: { type: String }, // omdb
  alternative_image: { type: String }, // omdb
  box_office: { type: String }, // ombdb
  rating: [monthMongoose.monthSchema], // omdb
  keywords: { type: Array, default: [] },
  images: { type: Array, default: [] },
  similar: { type: Array, default: [] },
  videos: { type: Array, default: [] },
  reviews: { type: Array, default: [] },
  credits: { type: Object, default: {} }
});

var movieModel = mongoose.model(config.get('mongodb')['mainMoviesCollection'], movieSchema);
var newMovieModel = mongoose.model(config.get('mongodb')['tmpMoviesCollection'], movieSchema);

module.exports = {
  movieSchema: movieSchema,
  movieModel: movieModel,
  newMovieModel: newMovieModel
};
