const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const AuthError = User.AuthError;
const config = require('../config');
const redisClient = require('../redis');
const router = express.Router();

router.use('/user', require('./user'));

router.post('/signup', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  User.register(email, password, (err, user, next) => {
    console.log(err);
    if (err) {
      res.status(400).json(error => err.message);
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
      res.status(400).json(error => err.message);
    }

    const token = jwt.sign(user.toObject(), config.secret, {
      expiresIn: 1440 * 60
    });

    redisClient.set(token, JSON.stringify(user.toObject()));

    return res.json({token: token});
  });
});

module.exports = router;