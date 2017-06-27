const mongoose = require('mongoose');
const config = require('./config');

mongoose.Promise = global.Promise;
mongoose.connect(config.db.uri, config.db.options);
