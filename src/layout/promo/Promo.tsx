import { Container } from '../../components/common/Container.ts'
import styled from 'styled-components'
import bgImg from '../../assets/images/bg-main.jpg'
import { Social } from '../../components/social/Social.tsx'
import { HeaderContent } from '../../components/common/Title.ts'
import { Text } from '../../components/common/Text.ts'
import { ButtonLink } from '../../components/common/Buttons.ts'
import approvedImg from '../../assets/images/approved.png'
import type { ReactNode } from 'react'
import { addIdToElem, getModifyStrWithRandomSpan } from '../../utils/СhangingDataElements.tsx'
import { animationBlink, animationNeon, animationScaleIn } from '../../components/animation/Animation.tsx'
import { FlexWrapper } from '../../components/common/FlexWrapper.ts'

const textShadow = '0 -40px 100px,0 0 2px,0 0 1em #bfe2ff,0 0 0.5em #bfe2ff,0 0 0.1em #bfe2ff;'

export const Promo = () => {
  type ButtonItemRender = {
    $id?: string
    $name?: string
    $draggable?: boolean
    $textDecoration?: string
  }

  const btnListNoId = [
    {
      $name: 'About me',
    },
    {
      $name: 'Projects',
    },
  ]

  const renderItem: (arr: ButtonItemRender[]) => ReactNode[] = (arr: ButtonItemRender[]): ReactNode[] => {
    return arr.map(({ $name, $id }: ButtonItemRender) => {
      try {
        if (!$name) {
          throw new Error('$name has no length')
        }
        const $modifiedName = getModifyStrWithRandomSpan($name)
        return <ButtonLink key={$id} dangerouslySetInnerHTML={{ __html: $modifiedName }}></ButtonLink>
      } catch (error) {
        console.log(error)
      }
    })
  }

  const btnListWithId: ButtonItemRender[] = addIdToElem(btnListNoId)
  const btnElementsHtml: ReactNode[] = renderItem(btnListWithId)

  return (
    <PromoSection>
      <Container>
        <ContentWrapper>
          <HeaderContent>Hello, i’m</HeaderContent>
          <Title>Anton Barai</Title>
          <Text>Freelance UI designer and front-end developer. I create seamless web experiences for end-users.</Text>
          <Social />
          <Img src={approvedImg} alt="approved" />
          <ButtonLinkWrapper>{btnElementsHtml}</ButtonLinkWrapper>
        </ContentWrapper>
      </Container>
    </PromoSection>
  )
}

const PromoSection = styled.section`
  display: block;
  min-height: 800px;
  background: url(${bgImg}) center center / cover no-repeat;
  margin-top: 64px;
`
const ContentWrapper = styled.div`
  padding: 150px 30px 0 30px;
  max-width: 450px;
  position: relative;

  ${FlexWrapper} {
    margin-top: 30px;
  }
`
const Img = styled.img`
  width: 250px;
  position: absolute;
  right: -44%;
  bottom: 55%;
  z-index: 10;
`
const Title = styled.h1`
  color: #f5f5f5;
  font-weight: 600;
  font-size: 52px;
  line-height: 78px;
  text-align: center;
  margin: 0;
`

const ButtonLinkWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
  ${ButtonLink} {
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    outline: 4px ridge rgba(170, 50, 220, 0.6);
    border-radius: 2rem;
    background: rgba(24, 24, 36, 0.8);
    padding: 12px 25px;
    text-shadow: ${textShadow};
    text-decoration: none;

    ${animationNeon}
    &:hover {
      ${animationScaleIn};
      color: #7562e0;
      text-shadow: none;
    }

    span {
      ${animationBlink(2)}
    }
  }
`
