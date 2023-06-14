import { promises as fsPromises } from 'fs'

const create = async () => {
  const fileContent = 'I am fresh and young'
  const filepath = 'src/fs/files/fresh.txt'

  try {
    await fsPromises.access(filepath)
    throw new Error('FS operation failed: File already exists')
  } catch (error) {
    if (error.code === 'ENOENT') {
      await fsPromises.writeFile(filepath, fileContent)
      console.log('The file was successfully saved!')
    } else {
      throw error
    }
  }
}

await create()
