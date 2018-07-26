'use strict'

const http = require('http')
const server = http.createServer()
const port = parseInt(process.argv[2], 10) || 9000 // default to port 9000
let closing = false

server.on('request', function onRequest (req, res) {
  res.setHeader('Connection', 'close') // turn off keep-alive
  res.end('Hello World!')
  if (!closing) {
    closing = true
    server.close()
  }
})

server.once('listening', () => console.log('Server listening on port %d', port))
server.once('close', () => console.log('Server is closing. Bye bye!'))

server.listen(port)
