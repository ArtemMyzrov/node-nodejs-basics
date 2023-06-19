import path from 'path'
import { release, version } from 'os'
import { createServer as createServerHttp } from 'http'
import cMessage from './files/c.js'
import aObject from './files/a.json' assert { type: 'json' }
import bObject from './files/b.json' assert { type: 'json' }

const random = Math.random()

let importedObject

if (random > 0.5) {
  importedObject = aObject
} else {
  importedObject = bObject
}

console.log(`Release ${release()}`)
console.log(`Version ${version()}`)
console.log(`Path segment separator is "${path.sep}"`)

console.log(`Path to current file is ${new URL(import.meta.url).pathname}`)
console.log(
  `Path to current directory is ${path.dirname(
    new URL(import.meta.url).pathname
  )}`
)

console.log(importedObject)

console.log(cMessage)

const myServer = createServerHttp((_, res) => {
  res.end('Request accepted')
})

const PORT = 3000

myServer.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`)
  console.log('To terminate it, use Ctrl+C combination')
})

export { importedObject, myServer }
