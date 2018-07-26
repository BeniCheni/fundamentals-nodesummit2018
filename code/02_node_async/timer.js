'use strict'

const later = function later () {
  console.log('Hello (a little later)')
}

console.log('Hello!')
setTimeout(later, 100)
