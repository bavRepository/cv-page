import { Container } from '../container/Container.tsx'
import styled from 'styled-components'

export const Promo = () => {
  return (
    <Section>
      <Container></Container>
    </Section>
  )
}

const Section = styled.section`
  display: block;
  min-height: 800px;
  padding: 0 30px;
`
