import { promises as fsPromises } from 'fs'

const remove = async () => {
  const filePath = 'src/fs/files/fileToRemove.txt'

  try {
    await fsPromises.access(filePath)
    await fsPromises.unlink(filePath)
    console.log('The file was successfully deleted!')
  } catch (error) {
    if (error.code === 'ENOENT') {
      throw new Error('Error: File does not exist. FS operation failed.')
    } else {
      throw error
    }
  }
}

await remove()
