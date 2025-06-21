import styled from 'styled-components'

type ContainerWrapperProps = {
  $maxWidth?: string
}

export const Container = styled.div<ContainerWrapperProps>`
  margin: 0 auto;
  max-width: ${(props) => props.$maxWidth || '1140px'};
`
