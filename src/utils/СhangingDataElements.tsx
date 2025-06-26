const getModifyStrWithRandomSpan = (str: string) => {
  const getRandomIndex: number = Math.floor(Math.random() * str.length)
  const tmpChar = `<span>${str[getRandomIndex]}</span>`
  return `${str.slice(0, getRandomIndex)}${tmpChar}${str.slice(getRandomIndex + 1)}`
}

export { getModifyStrWithRandomSpan }
