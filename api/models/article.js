const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ArticleSchema = new Schema({
  title: String,
  short: String,
  content: String,
  author: {
    type: Schema.ObjectId,
    ref: 'User'
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('Article', ArticleSchema);
