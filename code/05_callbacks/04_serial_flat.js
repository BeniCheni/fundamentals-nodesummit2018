'use strict'

const fs = require('fs')
const maxFileSize = parseInt(process.argv[2], 10) || 400

function onStat (err, stats) {
  if (err) return console.error(err)

  if (stats.size < maxFileSize) {
    fs.readFile(__filename, 'utf8', onReadFile)
  } else {
    console.log('Not reading the file, it is too big')
  }
}

function onReadFile (err, contents) {
  if (err) return console.error(err)

  console.log(contents)
}

fs.stat(__filename, onStat)
