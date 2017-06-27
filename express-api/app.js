const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const http = require('http');
const config = require('./config');

const app = express();
const server = http.createServer(app);
const port = process.env.PORT || config.port;

app.use(express.static(__dirname + '/static'));
app.use(bodyParser.json({limit: config.bodyLimit}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors(config.cors));
app.use(require('./controllers'));

require('./db');
require('./ws')(server);
require('./redis');

server.listen(port, () => {
    console.log('Listening on port ' + port)
});
