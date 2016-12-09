var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var LocationSchema = new Schema({
    geo: {
        type: [Number],
        index: '2d'
    },
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    }
});

var Location = mongoose.model('location', LocationSchema);

module.exports.Location = Location;

module.exports.update = function(data, callback) {
    Location.update(
        {userId: data.userId},
        {$set: data},
        {upsert: true, setDefaultsOnInsert: true},
        callback
    );
};