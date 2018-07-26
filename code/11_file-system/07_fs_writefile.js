'use strict'

const fs = require('fs')
const path = require('path')
const file = path.join(__dirname, 'out.txt')
const buffer = Buffer.from('Writing this string', 'utf8')

fs.writeFile(file, buffer, { flag: 'a' }, function onWriteFile (err) {
  if (err) return console.error(err)

  console.log('Wrote %d bytes', +buffer.length)
})
