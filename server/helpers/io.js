var sio = require('socket.io');
var io = null;

exports.io = function () {
  return io;
};

exports.initialize = function(server) {
  io = sio(server);

  let messages = []

  io.on('connection', function(socket) {
    socket.on('last-messages', function (fn) {
      fn(messages.slice(-50))
    });
    socket.on('send-message', function (message) {
      messages.push(message)
      socket.broadcast.emit('new-message', message)
    })
  });
};
