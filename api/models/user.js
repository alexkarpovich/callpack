var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
    email: {
        unique: true,
        type: String
    },
    password: String,
    firstName: String,
    lastName: String
});

module.exports = mongoose.model('user', UserSchema);
