'use strict'

const { EventEmitter } = require('events')
const emitter = new EventEmitter()

let tick = true
let count = 0

setInterval(() => {
  count++
  emitter.emit(tick ? 'tic' : 'tac', count)
  tick = !tick
}, 1000)

emitter.on('tic', count => console.log('[%d] TIC', count))
emitter.on('tac', count => console.log('[%d] TAC', count))
