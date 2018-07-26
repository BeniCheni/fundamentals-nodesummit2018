'use strict'

const port = parseInt(process.argv[2], 10) || 8080

require('http').createServer((req, res) => {
  res.writeHead(200, {'content-type': 'text/plain'})
  res.end('Hello World!')
}).listen(port)

console.log('Listening on port %d', port)
