const express = require('express');
const app = express();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));

io.on('connection', function (socket) {
  console.log('New client connect');
  socket.emit('Message', 'Welcome user!');
});

setInterval(function () {
  io.emit('Message', 'Hello World!');
}, 5000)

server.listen(3010, function () {
  console.log('Server initialized en http://localhost:3010');
});