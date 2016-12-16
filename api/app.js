const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || config.get('port');

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json({limit: config.bodyLimit}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(config.get('cors')));
app.use(require('./routes'));

require('./libs/db');
require('./libs/ws')(server);
require('./libs/redis');

app.use(function (err, req, res, next) {
  res.status(400).json(err);
});

server.listen(port, () => {
  console.log('Listening on port ' + port)
});
