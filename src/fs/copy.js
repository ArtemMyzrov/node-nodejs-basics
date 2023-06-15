import { promises as fsPromises } from 'fs'

const copy = async () => {
  try {
    const sourceDir = 'src/fs/files'
    const targetDir = 'src/fs/files_copy'

    const sourceDirStat = await fsPromises.stat(sourceDir)
    if (!sourceDirStat.isDirectory()) {
      throw new Error(
        'Error: Source directory is not found or is not a directory.'
      )
    }

    try {
      await fsPromises.access(targetDir)
    } catch (error) {
      if (error.code === 'ENOENT') {
        await fsPromises.mkdir(targetDir)
      } else {
        throw new Error('Error: Target directory access failed.')
      }
    }

    const fileNames = await fsPromises.readdir(sourceDir)
    await Promise.all(
      fileNames.map(async (fileName) => {
        const sourceFiles = `${sourceDir}/${fileName}`
        const targetFiles = `${targetDir}/${fileName}`
        await fsPromises.copyFile(sourceFiles, targetFiles)
      })
    )

    console.log('Files copied successfully!')
  } catch (error) {
    console.error('FS operation failed:', error)
  }
}

await copy()
