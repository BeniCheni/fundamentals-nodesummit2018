'use strict'

const fs = require('fs')
const file = process.argv[2] || __filename

fs.readFile(file, function onReadFile (err, bytes) {
  if (err) return console.error(err)

  console.log(bytes.toString())
})
