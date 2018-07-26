'use strict'

const PORT = 8000
const https = require('https')
const fs = require('fs')
const server = https.createServer({
  pfx: fs.readFileSync('some_cert.pfx')
})

server
  .on('request', onRequest)
  .on('listening', onListening)
  .listen(PORT)

function onRequest (req, res) {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('You are still in a huge, but secure, cave\r\n')
}

function onListening () {
  console.log('HTTPS server listening on port', PORT)
}
