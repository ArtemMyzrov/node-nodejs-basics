import { promises as fsPromises } from 'fs'

const create = async () => {
  const fileContent = 'I am fresh and young'
  const filepath = 'src/fsfiles/fresh.txt'

  fsPromises.writeFile(filepath, fileContent, (err) => {
    if (err) throw err

    console.log('The file was succesfully saved!')
  })
}

await create()
