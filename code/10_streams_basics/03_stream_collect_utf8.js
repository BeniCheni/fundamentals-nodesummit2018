'use strict'

const https = require('https')
const url = 'https://en.wikipedia.org/wiki/List_of_buzzwords'

https.get(url, res => {
  res.setEncoding('utf8') // set the encoding we want emitted

  let page = '' // concatenate entire page into a single variable

  res.on('data', d => {
    console.log('Received %d bytes', d.length)
    page += d // we now get Strings and no longer need to d.toString()
  })

  res.on('end', () => {
    console.log('Got entire page:')
    console.log(page)
  })
})
