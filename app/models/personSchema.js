'use strict';

const mongoose = require('mongoose');
const config = require('config');

var personSchema = new mongoose.Schema({
  'adult': { type: String },
  'also_known_as': { type: String },
  'biography': { type: String },
  'birthday': { type: mongoose.Schema.Types.Mixed },
  'deathday': { type: mongoose.Schema.Types.Mixed },
  'gender': { type: Number },
  'homepage': { type: String },
  'id': { type: Number, index: { unique: true, dropDups: true } },
  'imdb_id': { type: String },
  'name': { type: String },
  'place_of_birth': { type: String },
  'popularity': { type: Number },
  'profile_path': { type: String },
  'known_for': { type: Array, default: [] }
});

var personModel = mongoose.model(config.get('mongodb')['mainPeopleCollection'], personSchema);
var newPersonModel = mongoose.model(config.get('mongodb')['tmpPeopleCollection'], personSchema);

module.exports = {
  personSchema: personSchema,
  personModel: personModel,
  newPersonModel: newPersonModel
};
