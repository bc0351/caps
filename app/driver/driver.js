const event_pool = require('../../event-pool.js');

function pickupHandler(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  event_pool.emit('in-transit', payload);
}

function deliveryHandler(payload) {
  console.log(`DRIVER: delivered ${payload.orderID}`);
  event_pool.emit('delivery', payload)
}
module.exports = { pickupHandler, deliveryHandler }
