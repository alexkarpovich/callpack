const crypto = require('crypto');
const mongoose = require('mongoose');
const async = require('async');
const Schema = mongoose.Schema;


const UserSchema = new Schema({
  email: {
    type: String,
    unique: true,
    required: true,
  },
  hashedPassword: {
    type: String,
    required: true,
  },
  salt: {
    type: String,
    required: true,
  },
  firstName: String,
  lastName: String,
  image: String,
}, {
  timestamps: true
});

UserSchema.path('email').validate(function (email) {
  var emailRegex = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;

  return emailRegex.test(email);
}, 'The e-mail field cannot be empty.');

UserSchema.methods.encryptPassword = function (password) {
  return crypto.createHmac('sha1', this.salt).update(password).digest('hex');
};

UserSchema.virtual('password')
  .set(function (password) {
    this._plainPassword = password;
    this.salt = Math.random() + '';
    this.hashedPassword = this.encryptPassword(this.password);
  })
  .get(function () {
    return this._plainPassword;
  });

UserSchema.methods.checkPassword = function (password) {
  return this.encryptPassword(password) === this.hashedPassword;
};

UserSchema.statics.register = function (email, password, callback) {
  async.waterfall([
    cb => {
      User.findOne({email: email}).exec()
        .then(user => cb(null, user))
        .catch(err => cb(err));
    }, (user, cb) => {
      if (!user) {
        const registrant = new User({email, password});
        registrant.save()
          .then(createdUser => cb(null, createdUser))
          .catch(err => cb(err));
      } else {
        cb(new AuthError('User with such email already exists.'));
      }
    }
  ], callback);
};

UserSchema.statics.authorize = function (email, password, callback) {
  async.waterfall([
    cb => {
      User.findOne({email: email}).exec()
        .then(user => cb(null, user))
        .catch(err => cb(err));
    }, (user, cb) => {
      if (user) {
        if (user.checkPassword(password)) {
          cb(null, user);
        } else {
          cb(new AuthError('Incorrect password!'));
        }
      } else {
        cb(new AuthError('User doesn\'t exist!'));
      }
    }
  ], callback);
};

const User = mongoose.model('User', UserSchema);

module.exports = User;

function AuthError(message) {
  Error.apply(this, arguments);
  Error.captureStackTrace(this, AuthError);

  this.message = message;
}

module.exports.AuthError = AuthError;