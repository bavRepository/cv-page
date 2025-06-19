import styled from 'styled-components'

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
export const Container = (props) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>
}

type ContainerWrapperProps = {
  $display?: string
}

const ContainerWrapper = styled.div<ContainerWrapperProps>`
  max-width: 1140px;
  margin: 0 auto;
  display: ${(props) => props.$display || 'block'};
`
