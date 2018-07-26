'use strict'

const { EventEmitter } = require('events')
const emitter = new EventEmitter()

// register interest in 'ping' events
emitter.on('ping', function firstPingListener () {
  console.log('First listener: ping')
})

// another 'ping' event listener
emitter.on('ping', function secondPinglistener () {
  console.log('Second listener: ping')
})

// trigger a 'ping' event
emitter.emit('ping')
emitter.emit('ping')
