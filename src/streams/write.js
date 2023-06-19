import fs from 'fs'

const write = async () => {
  const filePath = 'src/streams/files/fileToWrite.txt'

  const writableStream = fs.createWriteStream(filePath, { encoding: 'utf8' })

  process.stdin.pipe(writableStream)

  return new Promise((resolve, reject) => {
    writableStream.on('finish', () => {
      console.log('The data is written to a file')
      resolve()
    })

    writableStream.on('error', (error) => {
      console.error('Error writing to file:', error)
      reject(error)
    })
  })
}

await write()
