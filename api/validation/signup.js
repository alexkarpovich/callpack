var Joi = require('joi');

module.exports = {
  body: {
    email: Joi.string().email().required(),
    password: Joi.string().regex(/.{3,30}/).required(),
  }
};