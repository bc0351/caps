const event_pool = require('../../event-pool.js');

function newOrderHandler(payload) {
  // console.log(payload);
  event_pool.emit('pickup', payload);
}

function deliveredHandler(payload) {
  console.log('VENDOR: Thank you for delivering ', payload.orderID);
  event_pool.emit('delivered', payload);
}

module.exports = { newOrderHandler, deliveredHandler };
