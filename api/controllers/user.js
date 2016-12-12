const express = require('express');
const User = require('../models/user');
const config = require('../config');
const router = express.Router();


router.get('/:id', (req, res) => {
  User.findById(req.params.id, (err, user) => {
    if (err) {
      console.log(err);
      return
    }

    res.json(user);
  });
});

module.exports = router;
