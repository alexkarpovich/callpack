const express = require('express');
const router = express.Router();
const UserController = require('../controllers/user');

router.route('/:id')
  .get(UserController.getAction);

module.exports = router;