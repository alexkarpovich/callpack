const jwt = require('jsonwebtoken');
const validate = require('express-validation');
const validation = require('../validation');
const User = require('../models/user');
const AuthError = User.AuthError;
const ValidationError  = require('mongoose').Error.ValidationError;
const config = require('../config');
const redisClient = require('../libs/redis');


class AuthController {

  static signupAction(req, res, next) {
    const {email, password} = req.body;

    User.register(email, password, (err, user, next) => {
      if (err) {
        if (err instanceof AuthError || err instanceof ValidationError) {
          return res.status(400).json({error: err.message});
        } else {
          next(err);
        }
      }

      const token = jwt.sign(user.toObject(), config.get('secret'), {
        expiresIn: 1440 * 60
      });

      redisClient.set(token, JSON.stringify(user.toObject()));

      return res.json({token: token});
    });
  }

  static signinAction(req, res, next) {
    const {email, password} = req.body;

    User.authorize(email, password, (err, user) => {
      if (err) {
        if (err instanceof AuthError || err instanceof ValidationError) {
          return res.status(400).json({error: err.message});
        } else {
          next(err);
        }
      }

      const token = jwt.sign(user.toObject(), config.get('secret'), {
        expiresIn: 1440 * 60
      });

      redisClient.set(token, JSON.stringify(user.toObject()));

      return res.json({token: token});
    });
  }

}

module.exports = AuthController;