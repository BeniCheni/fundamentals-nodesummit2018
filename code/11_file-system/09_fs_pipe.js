'use strict'

const fs = require('fs')
const path = require('path')
const src = process.argv[2] || __filename
const dest = process.argv[3] || path.join(__dirname, 'copy.js')

fs.createReadStream(src).pipe(fs.createWriteStream(dest))
