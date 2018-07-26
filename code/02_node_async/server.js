'use strict'

const http = require('http')
const fs = require('fs')

const server = http.createServer(function handler (req, res) {
  fs.readFile(__filename, function callback (err, content) {
    if (err) {
      res.statusCode = 500
      return res.end(err.message)
    }
    res.end(content)
  })
})

server.listen(8000)
