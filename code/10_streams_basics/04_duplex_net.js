'use strict'

const net = require('net')

net.createServer(socket => {
  // pipe the Readable side to the Writable side of the same socket
  // to create an echo server
  socket.pipe(socket)
}).listen(1337)
