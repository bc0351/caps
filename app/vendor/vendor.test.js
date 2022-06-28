'use strict';
const Chance = require('chance');

const chance = new Chance();
const event_pool = require('../../event-pool.js');
const { newOrderHandler, deliveredHandler } = require('./index.js');

jest.mock('../../event-pool.js', ()=> {
  return {
    on: jest.fn(),
    emit: jest.fn(),
  }
});

describe('newOrderHandler()', ()=>{
  it('should emit new order event',()=> {
    let payload = {
      "store": chance.company(),
      "orderID": chance.guid(),
      "customer": chance.name(),
      "address": `${chance.city()}, ${chance.state()}`
    };
    newOrderHandler(payload);
    expect(event_pool.emit).toHaveBeenCalledWith('pickup',payload);
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
    deliveredHandler(payload);
    expect(event_pool.emit).toHaveBeenCalledWith('delivered',payload);
  })
});
