'use strict'

const fs = require('fs')
const path = require('path')

fs.open(path.join(__dirname, 'out.txt'), 'a', function onOpen (err, fd) {
  if (err) return console.error(err)

  const buffer = Buffer.from('Writing this string', 'utf8')
  const length = buffer.length

  fs.write(fd, buffer, 0, length, null, function onWrite (err, written) {
    if (err) return console.error(err)

    console.log(`Wrote ${written} bytes`)
  })
})
