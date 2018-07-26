'use strict'

const net = require('net')
const fs = require('fs')

/// connect to server
const socket = net.connect({ port: 1337 })
socket.on('error', err => console.error(err))

const ws = fs.createReadStream(__filename + 'pep')
ws.on('error', err => console.error(err))
  .on('finish', () => {
    console.log('Finished sending file')
  })

ws.pipe(socket)
///
