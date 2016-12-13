const express = require('express');
const User = require('../models/user');
const config = require('../config');
const router = express.Router();


router.get('/:id', (req, res) => {
  User.findById(req.params.id).exec()
    .then(user => {
      res.json(user);
    })
    .catch(err => res.status(400).json({error: err}));
});

module.exports = router;
