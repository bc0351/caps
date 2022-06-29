'use strict';

const Chance = require('chance');
const chance = new Chance();

const { io } = require('socket.io-client');

//acknowledge a connection, no subscription
const socket = io('http://localhost:3002');
const createSendOrder = require('./sendOrder');
const sendOrder = createSendOrder(socket);
const handleDelivered = require('./handleDelivered')

socket.on('DELIVERED', handleDelivered(order));

setInterval(() => {
  let order = {
    "store": chance.company(),
    "orderID": chance.guid(),
    "customer": chance.name(),
    "address": `${chance.city()}, ${chance.state()}`
  };
  sendOrder(order)
}, 3000)
