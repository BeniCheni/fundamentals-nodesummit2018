'use strict'

const { fork } = require('child_process')
const path = require('path')

const child = fork(path.join(__dirname, '06_child.js'), {
  env: {
    NODE_ENV: 'production'
  }
})

let messageCount = 0
child.on('message', message => {
  messageCount++
  console.log('[parent] got message from child', message)
  child.send('I got your message #' + messageCount + ', thanks!')
})
