'use strict';

module.exports = (socket) => (order) => {
  console.log(`DRIVER: picked up order ${order.orderID}`);
  socket.emit('IN-TRANSIT', { order });
}
