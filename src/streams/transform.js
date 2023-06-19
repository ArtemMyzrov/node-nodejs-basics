import { Transform } from 'stream'

const transform = async () => {
  return new Promise((resolve, reject) => {
    const reverseText = new Transform({
      transform(chunk, encoding, callback) {
        const reversedChunk = chunk.toString().split('').reverse().join('')
        this.push(reversedChunk)
        callback()
      },
    })
    reverseText.on('end', () => {
      resolve()
    })
    reverseText.on('error', (error) => {
      reject(error)
    })

    process.stdin.pipe(reverseText).pipe(process.stdout)
  })
}

await transform()
