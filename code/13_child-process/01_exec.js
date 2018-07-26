'use strict'

const { exec } = require('child_process')

const command = 'cat *.js does_not_exist | wc -l'

exec(command, function onExec (err, stdout, stderr) {
  if (err) throw err

  console.log('Stdout: ' + stdout.toString())
  console.log('Stderr: ' + stderr.toString())
})
