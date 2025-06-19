import { css, keyframes } from 'styled-components'
import { getRandomValue } from '../../utils/MathWork.tsx'

// scaleInScew
const scaleInSkewKeyFrames = keyframes`
    0% { transform: scale(1) rotateX(0) skewX(0);}
  15% { transform: scale(0.93) rotateX(${getRandomValue(12, 22)}deg) skewX(${getRandomValue(12, 22)}deg);}
  100% { transform: scale(1); rotateX(0) skewX(0);}
`

const scaleInSkewMixin = css`
  animation: ${scaleInSkewKeyFrames} 0.4s ease-out;
`
// scaleIn
const scaleInKeyFrames = keyframes`
     0% { transform: scale(1); }
  15% { transform: scale(0.93);}
  100% { transform: scale(1); }

`
const scaleInMixin = css`
  animation: ${scaleInKeyFrames} 1.2s ease-out;
`

export { scaleInSkewMixin, scaleInMixin }
