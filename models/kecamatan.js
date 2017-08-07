var mongoose = require('mongoose');

var Schema = mongoose.Schema;
var ObjectId = mongoose.Types.ObjectId;

var kecamatanSchema = new Schema({
	_id			: Schema.ObjectId,
	name		: String,
	population	: Number,
	width		: String,
	height		: String,
	top			: String,
	left		: String,
	bg_x		: String,
	bg_y		: String
});

var Kecamatan = mongoose.model('Kecamatan', kecamatanSchema);

/** @Represent Get specific Kecamatan by ID */
Kecamatan.get = function(_id, callback){
	Kecamatan.findOne({_id}, function(err, obj){
		if (err || !obj) return callback(err);
		callback(null, obj.toObject());
	});
};

module.exports = Kecamatan;