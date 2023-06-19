import fs from 'fs'
import zlib from 'zlib'

const compress = async () => {
  const inputPath = 'src/zip/files/fileToCompress.txt'
  const outputPath = 'src/zip/archive.gz'

  const readStream = fs.createReadStream(inputPath)
  const writeStream = fs.createWriteStream(outputPath)
  const zipStream = zlib.createGzip()

  return new Promise((resolve, reject) => {
    readStream
      .pipe(zipStream)
      .pipe(writeStream)
      .on('finish', () => {
        console.log('File compressed completed')
        resolve()
      })
      .on('error', (error) => {
        console.error('Error compressing file:', error)
        reject(error)
      })
  })
}

await compress()
