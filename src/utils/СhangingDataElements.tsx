import { getRandomValue } from './MathWork.tsx'
import { Span } from '../components/common/Span.ts'

const getAnimatedSpan = (name: string, min: number, max: number) => {
  const getRandomIndex: number = Math.floor(Math.random() * name.length)
  const getRandomTimingValue = getRandomValue(min, max).toString() + 's'
  const animatedChar = <Span $duration={getRandomTimingValue}>{name[getRandomIndex]}</Span>

  const symbolBeforeAnimatedSpan = <Span>{name.slice(0, getRandomIndex)}</Span>
  const symbolAfterAnimatedSpan = <Span>{name.slice(getRandomIndex + 1)}</Span>
  return {
    symbolBeforeAnimatedSpan,
    animatedChar,
    symbolAfterAnimatedSpan,
  }
}

export { getAnimatedSpan }
