import styled from 'styled-components'

type ContainerWrapperProps = {
  $maxWidth?: string
  $padding?: string
}

export const Container = styled.div<ContainerWrapperProps>`
  margin: 0 auto;
  max-width: ${(props) => props.$maxWidth || '1200px'};
  padding: ${(props) => props.$padding || '0 20px 0 20px'};
`
