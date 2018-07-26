'use strict'

const fs = require('fs')
const file = process.argv[2] || __filename

fs.stat(file, function onStat (err, stats) {
  if (err) return console.error(err)

  console.log(stats, stats.isFile(), stats.isDirectory())
})
