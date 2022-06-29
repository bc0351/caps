'use strict';

module.exports = (socket) => (order) => {
  let EVENT = {
    "event": "PICKUP",
    "time": new Date(),
    "payload": { order }
  }
  console.log({ EVENT });
  socket.emit('PICKUP', { order });
}
