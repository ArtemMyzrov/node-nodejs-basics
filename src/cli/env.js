const parseEnv = () => {
  const variables = process.env

  const rssVariables = Object.entries(variables).filter(([key]) =>
    key.startsWith('RSS_')
  )

  const rssVariablesString = rssVariables
    .map(([key, value]) => `${key}=${value}`)
    .join('; ')

  console.log(rssVariablesString)
}

parseEnv()
