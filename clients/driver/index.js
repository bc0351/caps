'use strict';

const { io } = require('socket.io-client');

//acknowledge a connection, no subscription
const socket = io('http://localhost:3002');
const createPickUp = require('./handlePickUp');
const handlePickUp = createPickUp(socket);
const createDelivery = require('./handleDelivered');
const handleDelivered = createDelivery(socket);

socket.on('PICKUP', handlePickUp(order));
socket.on('DELIVERED', handleDelivered(order));
