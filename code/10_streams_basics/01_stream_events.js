'use strict'

const https = require('https')
const url = 'https://en.wikipedia.org/wiki/List_of_buzzwords'

https.get(url, res => {
  let byteCount = 0

  res.on('data', d => {
    console.log('Received %d bytes', d.length)
    byteCount += d.length
  })

  res.on('end', () => {
    console.log('Ended with total %d bytes', byteCount)
  })
})
