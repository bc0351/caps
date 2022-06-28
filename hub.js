'use strict';

const event_pool = require('./event-pool');
require('./app/vendor');
require('./app/driver/driver');

event_pool.on('order', (payload) => logEvent('order', payload));
event_pool.on('pickup', (payload) => logEvent('pickup', payload));
event_pool.on('delivery', (payload) => logEvent('delivery', payload));
event_pool.on('delivered', (payload) => logEvent('delivered', payload));

function logEvent(event, payload) {
  let timestamp = new Date();
  console.log('EVENT', { event, timestamp, payload });
}

setInterval(() => {
  const payload = {
    "store": chance.company(),
    "orderID": chance.guid(),
    "customer": chance.name(),
    "address": `${chance.city()}, ${chance.state()}`
  };
  event_pool.emit('order', { payload });
}, 3000)
