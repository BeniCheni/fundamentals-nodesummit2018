'use strict'

const { exec } = require('child_process')

exec('ping google.com', { maxBuffer: 1 }, function onExec (err, stdout, stderr) {
  console.log('Error:\n', err)
  console.log('Stdout:\n', stdout)
  console.log('Stderr:\n', stderr)
})
