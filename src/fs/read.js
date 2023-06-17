import { promises as fsPromises } from 'fs'

const read = async () => {
  try {
    const filesDir = 'src/fs/files/fileToRead.txt'
    await fsPromises.access(filesDir)

    const filesRead = await fsPromises.readFile(filesDir, 'utf-8')

    console.log(filesRead)
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Error: Directory does not exist. FS operation failed.')
    } else {
      throw error
    }
  }
}

await read()
