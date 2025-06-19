import { Container } from '../container/Container.tsx'
import styled from 'styled-components'
import bgImg from '../../assets/images/bg-main.jpg'
import { Social } from '../../components/social/Social.tsx'

export const Promo = () => {
  return (
    <Section>
      <Container>
        <Wrapper>
          <SubTitle>Hello, i’m</SubTitle>
          <Title>Anton Barai</Title>
          <Descr>Freelance UI designer and front-end developer. I create seamless web experiences for end-users.</Descr>
          <Social></Social>
        </Wrapper>
      </Container>
    </Section>
  )
}

const Section = styled.section`
  display: block;
  min-height: 800px;
  background: url(${bgImg}) center center / cover no-repeat;
  margin-top: 64px;
`
const Wrapper = styled.div`
  padding: 160px 30px 0 30px;
  max-width: 450px;
`

const Title = styled.h1`
  font-weight: 600;
  font-size: 52px;
  line-height: 78px;
  color: #f5f5f5;
  margin: 0;
  text-align: center;
`
const SubTitle = styled.h2`
  font-weight: 600;
  font-size: 32px;
  line-height: 48px;
  margin: 0;
  color: #ffffff;
  text-align: center;
`
const Descr = styled.div`
  margin-top: 8px;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: #ffffff;
  text-align: center;
`
