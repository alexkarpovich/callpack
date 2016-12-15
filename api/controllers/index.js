const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AuthError = User.AuthError;
const ValidationError  = require('mongoose').Error.ValidationError;
const config = require('../config');
const redisClient = require('../redis');
const router = express.Router();

router.use('/user', require('./user'));

router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.register(email, password, (err, user, next) => {
    if (err) {
      if (err instanceof AuthError || err instanceof ValidationError) {
        return res.status(400).json({error: err.message});
      } else {
        next(err);
      }
    }

    const token = jwt.sign(user.toObject(), config.secret, {
      expiresIn: 1440 * 60
    });

    redisClient.set(token, JSON.stringify(user.toObject()));

    return res.json({token: token});
  });
});

router.post('/signin', (req, res, next) => {
  const email = req.body.email;
  const password = req.body.password;

  User.authorize(email, password, (err, user) => {
    console.log(err);
    if (err) {
      if (err instanceof AuthError || err instanceof ValidationError) {
        return res.status(400).json({error: err.message});
      } else {
        next(err);
      }
    }

    const token = jwt.sign(user.toObject(), config.secret, {
      expiresIn: 1440 * 60
    });

    redisClient.set(token, JSON.stringify(user.toObject()));

    return res.json({token: token});
  });
});

module.exports = router;