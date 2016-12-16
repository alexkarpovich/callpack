const express = require('express');
const router = express.Router();
const AuthController = require('../controllers/auth');

router.route('/signup').post(AuthController.signupAction);
router.route('/signin').post(AuthController.signinAction);

module.exports = router;