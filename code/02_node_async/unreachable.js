'use strict'

const later = () => {
  console.log('Hello?')
}

// Schedule `later` for 10 milliseconds from start
setTimeout(later, 10)

// Calculate random numbers until the end of time
while (true) {
  Math.random()
}
