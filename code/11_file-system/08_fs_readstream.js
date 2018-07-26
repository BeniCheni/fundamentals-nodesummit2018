'use strict'

const fs = require('fs')
const file = process.argv[2] || __filename

fs.createReadStream(file).pipe(process.stdout)
