'use strict'

const PORT = 8000
const net = require('net')
const client = net.connect(PORT)

client.on('data', onData)

function onData (data) {
  process.stdout.write('server: ' + data.toString())
  setTimeout(respond, 1000)
}

function respond () {
  const msg = 'Describe cave\r\n'
  process.stdout.write('client: ' + msg)
  client.write(msg)
}
