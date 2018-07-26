'use strict'

const http = require('http')
const zipCodes = [ '90210', '94107', '10007', '33109' ]
let count = 0
let endpoint = 'http://api.openweathermap.org/data/2.5/weather'
let apiKey = '91ee1b726e850a52750c87205ec0e2a7'

zipCodes.forEach(zip => {
  const url = `${endpoint}?zip=${zip},us&APPID=${apiKey}&units=imperial`
  http.get(url, res => {
    let responseBody = ''

    // Collect response body
    res.on('data', d => {
      responseBody += d.toString()
    })

    res.once('end', () => {
      const obj = JSON.parse(responseBody.replace('//', ''))
      console.log(`${zip} - ${obj.name} - ${obj.main.temp} °F`)

      if (++count === zipCodes.length) {
        console.log('done!')
      }
    })
  })
})
