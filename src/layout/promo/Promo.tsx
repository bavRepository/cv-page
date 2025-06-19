import { Container } from '../container/Container.tsx'
import styled from 'styled-components'
import bgImg from '../../assets/images/bg-main.jpg'
import { Social } from '../../components/social/Social.tsx'
import { SubTitle3248, Title5278, Descr1827 } from '../../components/styles/Titles.tsx'
import approvedImg from '../../assets/images/approved.png'

export const Promo = () => {
  return (
    <Section>
      <Container $display={'flex'}>
        {/*$display={'flex'}*/}
        <Wrapper>
          <SubTitle3248>Hello, i’m</SubTitle3248>
          <Title5278 $color={'#f5f5f5'}>Anton Barai</Title5278>
          <Descr1827>
            Freelance UI designer and front-end developer. I create seamless web experiences for end-users.
          </Descr1827>
          <Social></Social>
          <ImgWrapper>
            <img src={approvedImg} alt="approved" />
          </ImgWrapper>
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
  position: relative;
`
const ImgWrapper = styled.div`
  width: 50%;
  position: absolute;
  right: -40%;
  bottom: 35%;
  z-index: 10;
  img {
    width: 100%;
  }
`
