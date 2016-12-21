const express = require('express');
const jwt = require('jsonwebtoken');
const config = require('../config');
const User = require('../models/user');
const router = express.Router();

router.use((req, res, next) => {
  const {authorization} = req.headers;

  if (authorization) {
    const [, token] = authorization.split(' ');

    if (token) {
      jwt.verify(token, config.get('secret'), (err, decoded) => {
        if (err) {
          return next(err);
        }

        User.findById(decoded._id)
          .then(user => {
            req.user = user;
            next();
          })
          .catch(err => next(err));
      });
    } else {
      req.user = null;
      next();
    }
  } else {
    req.user = null;
    next();
  }
});

router.use('/', require('./auth'));
router.use('/article', require('./article'));
router.use('/user', require('./user'));

module.exports = router;