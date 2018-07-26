'use strict'

function helloWorld () {
  console.log('hello world!')
}

function messenger (printMessageFunction) {
  console.log('delivering message')
  printMessageFunction()
}

helloWorld() // says 'hello world' right away

messenger(helloWorld) // says 'hello world' via a messenger

setTimeout(helloWorld, 1000) // aynchronous - say 'hello world' later

console.log('waiting for async hello world')
