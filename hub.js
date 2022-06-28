'use strict';

const event_pool = require('./event-pool');
const { newOrderHandler, deliveredHandler } = require('./app/vendor/vendor');
const { pickupHandler, deliveryHandler } = require('./app/driver/driver');

event_pool.on('pickup', newOrderHandler);
event_pool.on('in-transit', pickupHandler);
event_pool.on('delivery', deliveryHandler);
event_pool.on('delivered', deliveredHandler);
