'use strict'

const net = require('net')
const server = net.createServer()
const PORT = 8000

server
  .on('connection', onConnection)
  .on('listening', onListening)
  .listen(PORT)

function onConnection (conn) {
  conn.write('You are in a huge cave\r\n')
  conn.pipe(conn)
}

function onListening () {
  console.log('TCP server listening on port', PORT)
}
