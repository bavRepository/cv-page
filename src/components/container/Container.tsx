import styled from 'styled-components'

export const Container = (props: any) => {
  return <ContainerWrapper>{props.children}</ContainerWrapper>
}

const ContainerWrapper = styled.div`
  max-width: 1140px;
  margin: 0 auto;
`
