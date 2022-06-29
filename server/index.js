'use strict';

const { Server } = require('socket.io');
const PORT = process.env.PORT || 3002;

const server = new Server(PORT);

server.on('connection', (socket) => {
  console.log('Socket connected', socket.id);

  socket.on('MESSAGE', (payload) => {
    console.log('Server MESSAGE event ', payload);
    server.broadcast.emit('MESSAGE', payload)
  })
});

server.on('RECEIVED', (payload) => {
  console.log('Server RECEIVED event ', payload);
  socket.broadcast.emit('RECEIVED', payload);
})
