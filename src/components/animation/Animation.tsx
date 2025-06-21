import { css, keyframes } from 'styled-components'
import { getRandomValue } from '../../utils/MathWork.tsx'

// neon

const neon = keyframes`
  from {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52), 0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78), 0 0 54px rgba(191, 226, 255, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF;
  }
`
const animationNeon = css`
  animation: ${neon} 0.1s ease-in-out infinite alternate;
`

// blink

const blinkKeyFrames = keyframes`
78% {color: inherit;text-shadow: inherit;}
79%{color: #0b3960;}
80% {text-shadow: none;}
81% {color: inherit;text-shadow: inherit;}
82% {color: #0b3960;text-shadow: none;}
83% {color: inherit;text-shadow: inherit;}
92% {color: #0b3960;text-shadow: none;}
92.5% {color: inherit;text-shadow: inherit;}
`

const animationBlink = (timer: string | number) => css`
  animation: ${blinkKeyFrames} linear infinite ${timer}s;
`

// scaleInSkew
const scaleInSkewKeyFrames = keyframes`
    0% { transform: scale(1) rotateX(0) skewX(0);}
  15% { transform: scale(0.93) rotateX(${getRandomValue(12, 22)}deg) skewX(${getRandomValue(12, 22)}deg);}
  100% { transform: scale(1); rotateX(0) skewX(0);}
`

const animationScaleInSkew = css`
  animation: ${scaleInSkewKeyFrames} 0.4s ease-out;
`
// scaleIn
const scaleInKeyFrames = keyframes`
     0% { transform: scale(1); }
  15% { transform: scale(0.93);}
  100% { transform: scale(1); }

`
const animationScaleIn = css`
  animation: ${scaleInKeyFrames} 1.2s ease-out;
`

export { animationScaleInSkew, animationScaleIn, animationBlink, animationNeon }
