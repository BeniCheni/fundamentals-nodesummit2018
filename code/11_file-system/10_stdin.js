'use strict'

process.stdin.pipe(process.stdout)

process.stdin.on('end', () => {
  process.stdout.write('\ndone\n')
})
