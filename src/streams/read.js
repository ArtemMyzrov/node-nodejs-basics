import fs from 'fs'

const read = async () => {
  const filePath = '.fileToRead.txt'

  return new Promise((resolve, reject) => {
    const readableStream = fs.createReadStream(filePath, { encoding: 'utf8' })

    readableStream.on('data', (data) => {
      process.stdout.write(data)
    })

    readableStream.on('error', (err) => {
      reject(err)
    })

    readableStream.on('end', () => {
      resolve()
    })
  })
}

await read()
