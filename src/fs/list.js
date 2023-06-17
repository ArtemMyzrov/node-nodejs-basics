import { promises as fsPromises } from 'fs'

const list = async () => {
  try {
    const dirPath = 'src/fs/files'
    await fsPromises.access(dirPath)

    const files = await fsPromises.readdir(dirPath)

    console.log(files)
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Error: Directory does not exist. FS operation failed.')
    } else {
      throw error
    }
  }
}

await list()
