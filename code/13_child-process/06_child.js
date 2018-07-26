'use strict'

console.log(process.env)

process.on('message', m => {
  console.log('[child] got this message from parent:', m)
})

setInterval(() => {
  process.send({
    a: 'Here is something for you',
    b: true
  })
}, 1000)
