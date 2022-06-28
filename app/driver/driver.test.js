'use strict';
const Chance = require('chance');

const chance = new Chance();
const event_pool = require('../../event-pool.js');
const { pickupHandler, deliveryHandler } = require('./driver');

jest.mock('../../event-pool.js', ()=> {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  }
});

describe('pickupHandler()', ()=>{
  it('should emit new order event',()=> {
    let payload = {
      "store": chance.company(),
      "orderID": chance.guid(),
      "customer": chance.name(),
      "address": `${chance.city()}, ${chance.state()}`
    };
    pickupHandler(payload);
    expect(event_pool.emit).toHaveBeenCalledWith('in-transit',payload)
  })
});

describe('deliveredHandler()', ()=>{
  it('should console log delivered event',()=> {
    let payload = {
      "store": chance.company(),
      "orderID": chance.guid(),
      "customer": chance.name(),
      "address": `${chance.city()}, ${chance.state()}`
    };
    deliveryHandler(payload);
    expect(event_pool.emit).toHaveBeenCalledWith('delivery',payload)
  })
});
