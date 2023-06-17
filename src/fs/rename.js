import { promises as fsPromises } from 'fs'

const rename = async () => {
  try {
    const sourceFile = 'src/fs/files_copy/wrongFilename.txt'
    const targetFile = 'src/fs/files_copy/properFilename.md'

    await fsPromises.access(sourceFile)

    try {
      await fsPromises.access(targetFile)
      throw new Error('Error: Target file already exists.')
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fsPromises.rename(sourceFile, targetFile)
      } else {
        throw new Error('Error: Target file access failed.')
      }
    }

    console.log('File renamed successfully!')
  } catch (error) {
    console.error('FS operation failed:', error)
  }
}

await rename()
