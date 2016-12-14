const mongoose = require('mongoose');
const User = require('./user');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  short: String,
  content: String,
  author: User,
  createdDate: Date,
  updatedDate: Date
});

module.exports = mongoose.model('article', ArticleSchema);
