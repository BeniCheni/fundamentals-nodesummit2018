'use strict'

const { EventEmitter } = require('events')
const emitter = new EventEmitter()

emitter.once('ping', function pingListener () {
  console.log('Received ping') // only called once
})

emitter.emit('ping')
emitter.emit('ping')
