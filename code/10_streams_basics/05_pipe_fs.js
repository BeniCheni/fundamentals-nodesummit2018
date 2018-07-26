'use strict'

const fs = require('fs')

/// create streams
const source = fs.createReadStream(__filename)
const destination = fs.createWriteStream(__filename + '.copy')

// copy source file to destination
source.pipe(destination)
///

// handle errors
source
  .on('error', err => console.error(err))
  .on('finish', () => {
    console.log('Copied %s to %s', __filename, __filename + '.copy')
  })
