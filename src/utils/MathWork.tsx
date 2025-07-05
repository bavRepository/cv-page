import { v4 as uuidv4 } from 'uuid'

const getRandomValue = (min: number, max: number): number => Math.floor(Math.random() * (max - min) + min)

const getRndIdValue = () => {
  return uuidv4().toString()
}

export { getRandomValue, getRndIdValue }
