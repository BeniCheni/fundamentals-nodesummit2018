'use strict'

const https = require('https')
const url = 'https://en.wikipedia.org/wiki/List_of_buzzwords'

https.get(url, res => {
  let page = '' // concatenate entire page into a single variable

  res.setEncoding('utf8')

  res.on('data', d => {
    console.log('Received %d bytes', d.length)
    page += d.toString() // `d` is a Buffer, convert to a String and concat
  })

  res.on('end', () => {
    console.log('Got entire page:')
    console.log(page)
  })
})
