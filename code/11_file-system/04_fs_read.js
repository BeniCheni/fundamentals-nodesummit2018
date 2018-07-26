'use strict'

const fs = require('fs')
const file = process.argv[2] || __filename

fs.open(file, 'r', function onOpen (err, fd) {
  if (err) return console.error(err)

  const buffer = Buffer.alloc(1024)
  const length = buffer.length
  const filePosition = parseInt(process.argv[3], 10) || 100

  fs.read(fd, buffer, 0, length, filePosition, function onRead (err, bytes) {
    if (err) return console.error(err)

    console.log('Read %d bytes', bytes)
    if (bytes > 0) console.log(buffer.slice(0, bytes).toString())
  })
})
