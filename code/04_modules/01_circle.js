'use strict'

const pi = Math.PI

module.exports = function createCircle (radius) {
  function diameter () {
    return 2 * radius
  }

  function circumference () {
    return pi * diameter()
  }

  function area () {
    return pi * Math.pow(radius, 2)
  }

  return {
    area,
    circumference
  }
}
