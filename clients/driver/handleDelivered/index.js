'use strict';

module.exports = (socket) => (order) => {
  let EVENT = {
    "event": "DELIVERED",
    "time": new Date(),
    "payload": { order }
  }
  console.log({ EVENT });
  console.log(`DRIVER: delivered order ${order.orderID}`)
  socket.emit('DELIVERED', { order });
}
