'use strict'

const dns = require('dns')
const hostname = process.argv[2] || 'google.com'

dns.lookup(hostname, function onDnsLookup (err, address, family) {
  if (err) {
    console.error('error looking up', err.message)
  } else {
    console.log('%s resolved to %s (IPv%s)', hostname, address, family)
  }
})
