'use strict'

const net = require('net')
const fs = require('fs')

let i = 0
/// create a network server
net.createServer(socket => {
  // each time we get a connection, write the data to a new file
  const outFile = `out${i++}.dat`

  socket.pipe(fs.createWriteStream(outFile))
    .on('error', err => console.error(err))
    .on('finish', () => {
      console.log('Finished writing to %s', outFile)
    })
}).listen(1337)
///
