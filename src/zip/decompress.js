import fs from 'fs'
import zlib from 'zlib'

const decompress = async () => {
  const inputPath = 'src/zip/archive.gz'
  const outputPath = 'src/zip/files/fileToCompressss.txt'

  const readStream = fs.createReadStream(inputPath)
  const writeStream = fs.createWriteStream(outputPath)

  const unzipStream = zlib.createGunzip()

  readStream.pipe(unzipStream).pipe(writeStream)

  return new Promise((resolve, reject) => {
    writeStream.on('finish', () => {
      console.log('Decompression compled')
      resolve()
    })

    writeStream.on('error', (error) => {
      console.error('Error decompressing file:', error)
      reject(error)
    })
  })
}

await decompress()
