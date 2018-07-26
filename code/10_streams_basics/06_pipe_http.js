'use strict'

const https = require('https')
const fs = require('fs')
const path = require('path')

const targetFile = path.join(__dirname, '/nodejs.svg')
/// create a Writable
const targetStream = fs.createWriteStream(targetFile)

https.get('https://nodejs.org/static/images/logo.svg', res => {
  // res is a Readable
  res.pipe(targetStream)
    .on('error', err => console.error(err))
})
///

targetStream.on('finish', () => {
  console.log('Finished writing to %s', targetFile)
})

targetStream.on('error', err => console.error(err))
