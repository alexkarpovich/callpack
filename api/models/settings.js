var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var User = require('./user');

var SettingsSchema = new Schema({
    shareMyLocation: Boolean,
    userId: {
        type: Schema.Types.ObjectId,
        ref: User
    }
});

var Settings = mongoose.model('settings', SettingsSchema);

module.exports.Settings = Settings;
