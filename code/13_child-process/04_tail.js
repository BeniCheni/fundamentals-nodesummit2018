'use strict'

const { spawn } = require('child_process')
const fs = require('fs')
const path = require('path')

const fileName = path.join(__dirname, 'somefile.txt')
const out = fs.createWriteStream(fileName)

// write a line to the file every second
setInterval(() => {
  out.write((new Date()).toString() + ' - Hey there!\n')
}, 1000)

/// tail
const tail = spawn('tail', [ '-f', fileName ])

tail.stdout.on('data', d => {
  console.log('[tail.stdout]: ' + d)
})

tail.stderr.on('data', d => {
  console.log('[tail.stderr]: ' + d)
})

tail.once('close', (code, signal) => {
  console.log('Tail process exited with code', code, 'and signal', signal)
})
