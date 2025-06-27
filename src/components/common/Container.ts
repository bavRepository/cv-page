import styled from 'styled-components'

type ContainerWrapperProps = {
  $maxWidth?: string
  $padding?: string
}

export const Container = styled.div<ContainerWrapperProps>`
  margin: 0 auto;
  max-width: ${(props) => props.$maxWidth || '1230px'};
  width: 100%;
  min-height: 100%;
  //padding: ${(props) => props.$padding || '0 15px 0 15px'};
  border: 1px solid red;
  @media (max-width: 1199.98px) {
    max-width: 960px;
  }
  @media (max-width: 991.98px) {
    max-width: 720px;
  }
  @media (max-width: 767.98px) {
    max-width: 540px;
  }
`
