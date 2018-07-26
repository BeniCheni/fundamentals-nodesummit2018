'use strict'

const fs = require('fs')

function onReadFile (err, contents) {
  if (err) {
    console.error('File read error:', err)
  } else {
    console.log(contents)
  }
}

fs.readFile(__filename, 'utf8', onReadFile)
