const socketioJwt = require('socketio-jwt');
const config = require('./config');

module.exports = server => {
    var io = require('socket.io')(server);

    io.listen(config.ws.port);
    io.use(socketioJwt.authorize({
        secret: config.secret,
        handshake: config.ws.handshake
    }));

    io.on('connection', socket => {
        var user = socket.decoded_token;

        socket.on('geo:location:update', message => {
        });
    });
};
