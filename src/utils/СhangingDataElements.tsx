import { v4 as uuidv4 } from 'uuid'
import type { ItemListType } from '../layout/sections/offer/Offers.tsx'

const addIdToElem = (elements: object[]): ItemListType[] => {
  return elements.map((elem) => {
    return { ...elem, $id: uuidv4() }
  })
}

const getModifyStrWithRandomSpan = (str: string) => {
  const getRandomIndex: number = Math.floor(Math.random() * str.length)
  const tmpChar = `<span>${str[getRandomIndex]}</span>`
  return `${str.slice(0, getRandomIndex)}${tmpChar}${str.slice(getRandomIndex + 1)}`
}

export { addIdToElem, getModifyStrWithRandomSpan }
