const event_pool = require('../../event-pool.js');

event_pool.on('pickup',pickupHandler);
event_pool.on('delivery', deliveryHandler);

function pickupHandler(payload) {
  console.log(`DRIVER: picked up ${payload.orderID}`);
  event_pool.emit('in-transit', payload);
}

function deliveryHandler(payload) {
  console.log(`DRIVER: delivered ${payload.orderID}`);
  event_pool.emit('delivery', payload)
}

module.exports = { pickupHandler, deliveryHandler }
