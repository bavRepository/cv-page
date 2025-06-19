import { Container } from '../container/Container.tsx'
import styled from 'styled-components'
import bgImg from '../../assets/images/bg-main.jpg'

export const Promo = () => {
  return (
    <Section>
      <Container>
        <Wrapper direction="column">
          <SubTitle>Hello, i’m</SubTitle>
          <Title>Anton Barai</Title>
          <Descr>
            Freelance UI designer, front-end developer, & Data Miner. I create seamless web experiences for end-users.
          </Descr>
        </Wrapper>
      </Container>
    </Section>
  )
}

type FlexWrapperProps = {
  direction?: 'column' | 'row'
  justify?: 'space-between' | 'space-around' | 'space-evenly' | 'flex-end'
  align?: 'flex-start' | 'flex-end' | 'center' | 'space-between' | 'space-around'
  flexWrap?: 'wrap' | 'nowrap'
}

const Section = styled.section`
  display: block;
  min-height: 800px;
  background: url(${bgImg}) center center / cover no-repeat;
  margin-top: 64px;
`
const Wrapper = styled.div<FlexWrapperProps>`
  display: flex;
  flex-direction: ${(props) => props.direction || 'row'};
  justify-content: ${(props) => props.justify || 'flex-start'};
  align-items: ${(props) => props.align || 'flex-start'};
  flex-wrap: ${(props) => props.flexWrap || 'wrap'};
  padding: 160px 0 12px 0;
  max-width: 450px;
`
const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  margin: 0;
  color: #ffffff;
`
const Title = styled.h1`
  font-weight: 600;
  font-size: 52px;
  line-height: 78px;
  color: #f5f5f5;
  margin: 0;
`
const Descr = styled.div`
  margin-top: 5px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
`
// const Btn = styled.a``
