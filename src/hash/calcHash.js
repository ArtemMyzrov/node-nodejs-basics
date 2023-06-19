import crypto from 'crypto'
import fs from 'fs/promises'

const calculateHash = async () => {
  const filePath = 'src/hash/files/fileToCalculateHashFor.txt'
  try {
    const readFile = await fs.readFile(filePath)
    const hash = crypto.createHash('sha256').update(readFile).digest('hex')
    console.log('Hash : ', hash)
  } catch (error) {
    console.log('File reading error:', error)
  }
}

await calculateHash()
