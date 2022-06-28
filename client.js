'use strict';

const EventEmitter = require("node:events");
const vendorEmitter = new EventEmitter();
const driverEmitter = new EventEmitter();

hubEmitter.on('EVENT', function allListener(payload) {
  console.log(payload);
})
