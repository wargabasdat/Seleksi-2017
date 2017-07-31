'use strict';

const mongoose = require('mongoose');

var monthSchema = new mongoose.Schema({
  january: { type: Array, default: [] },
  february: { type: Array, default: [] },
  march: { type: Array, default: [] },
  april: { type: Array, default: [] },
  may: { type: Array, default: [] },
  june: { type: Array, default: [] },
  july: { type: Array, default: [] },
  august: { type: Array, default: [] },
  september: { type: Array, default: [] },
  october: { type: Array, default: [] },
  november: { type: Array, default: [] },
  december: { type: Array, default: [] }
});

var monthModel = mongoose.model('monthModel', monthSchema);

module.exports = {
  monthSchema: monthSchema,
  monthModel: monthModel
};
