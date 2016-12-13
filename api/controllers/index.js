const express = require('express');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const config = require('../config');
const redisClient = require('../redis');
const router = express.Router();

router.use('/user', require('./user'));

router.post('/signup', (req, res) => {
  User.findOne({email: req.body.email}).exec().then(user => {
    if (user) {
      return res.status(400).json({
        errors: {
          email: 'The same email is already exists'
        }
      });
    }

    const registrant = new User(req.body);
    registrant.save().then(createdUser => {
      const token = jwt.sign(createdUser.toObject(), config.secret, {
        expiresIn: 1440 * 60
      });

      redisClient.set(token, JSON.stringify(createdUser.toObject()));

      return res.json({token: token});
    }).catch(err => {
      res.status(400).json({error: err});
    });
  }).catch(err => {
    res.status(400).json({error: err});
  });
});

router.post('/signin', (req, res) => {
  User.findOne({email: req.body.email, password: req.body.password}).exec().then(user => {
    if (!user) {
      return res.status(400).json({
        errors: {
          all: 'Invalid credentials'
        }
      });
    }

    const token = jwt.sign(user.toObject(), config.secret, {
      expiresIn: 1440 * 60
    });

    redisClient.set(token, JSON.stringify(user.toObject()));

    return res.json({token: token});
  }).catch(err => res.status(400).json({error: err}));
});

module.exports = router;