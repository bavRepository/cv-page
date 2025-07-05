import styled from 'styled-components'
import { animationBlink } from '../animation/Animation.tsx'

type SpanProps = {
  $duration?: string
}

export const Span = styled.span<SpanProps>`
  ${(props) => (props.$duration ? animationBlink(props.$duration) : null)}
`
