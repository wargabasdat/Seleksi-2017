var mongoose = require('mongoose');
var bcrypt   = require('bcrypt-nodejs');

var ObjectId = mongoose.Types.ObjectId;
var Schema = mongoose.Schema;

var userSchema = Schema({
    _id              : Schema.ObjectId,
    local            : {
        email        : String,
        password     : String,
        name		 : String,
        birthday	 : String,
        gender		 : String,
        kecamatan	 : String,
        status       : String
    },
    physical_disease  : [{
        name       : String,
        part       : String,
        width      : String,
        height     : String,
        top        : String,
        left       : String,
        bg_x       : String,
        bg_y       : String,
        desc       : String
    }],
    organ_disease  : [{
        name       : String,
        part       : String,
        desc       : String
    }],

});

/** @Represent Hashing user's password */
userSchema.methods.generateHash = function(password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/** @Represent Checking user's password */
userSchema.methods.validPassword = function(password) {
    return bcrypt.compareSync(password, this.local.password);
};

module.exports = mongoose.model('User', userSchema);