import { Container } from '../../../components/common/Container.ts'
import styled from 'styled-components'
import bgImg from '../../../assets/images/bg-main.jpg'
import { Social } from '../../../components/social/Social.tsx'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Text } from '../../../components/common/Text.ts'
import { ButtonLink } from '../../../components/common/Button.ts'
import approvedImg from '../../../assets/images/approved.png'
import type { ReactNode } from 'react'
import { animationNeon, animationScaleIn, transformTranslateY } from '../../../components/animation/Animation.tsx'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import { theme } from '../../../styles/Theme.ts'
import { getLinksElementsFromDataList } from '../../../Data/ModifyElementsData.tsx'
import { elementsData } from '../../../Data/ElementsData.tsx'

const textShadow = '0 -40px 100px,0 0 2px,0 0 1em #bfe2ff,0 0 0.5em #bfe2ff,0 0 0.1em #bfe2ff;'

export const Promo = () => {
  // const addIdToElem: (elements: ButtonItemRender[]) => ButtonItemRender[] = (elements) => {
  //   return elements.map((elem) => {
  //     const strId = getRndIdValue()
  //     return { ...elem, $id: strId }
  //   })
  // }
  //
  // const renderItem: (arr: ButtonItemRender[]) => ReactNode[] = (arr: ButtonItemRender[]): ReactNode[] => {
  //   return arr.map(({ $name, $id }: ButtonItemRender) => {
  //     try {
  //       if (!$name) {
  //         throw new Error('$name has no length')
  //       }
  //       const { symbolBeforeAnimatedSpan, animatedChar, symbolAfterAnimatedSpan } = getAnimatedSpan($name, 1, 7)
  //       return (
  //         <ButtonLink key={$id}>
  //           {symbolBeforeAnimatedSpan}
  //           {animatedChar}
  //           {symbolAfterAnimatedSpan}
  //         </ButtonLink>
  //       )
  //     } catch (error) {
  //       console.log(error)
  //     }
  //   })
  // }
  //
  // const btnListWithId: ButtonItemRender[] = addIdToElem(btnListNoId)
  // const btnElementsHtml: ReactNode[] = renderItem(btnListWithId)
  const { btnListNoId } = elementsData()
  const linksHtml: ReactNode[] = getLinksElementsFromDataList(btnListNoId)
  return (
    <PromoSection>
      <Container>
        <ApproveImg draggable={false} src={approvedImg} alt="approved" />
        <ContentWrapper>
          <SectionTitle>Hello, i’m</SectionTitle>
          <Title>Anton Barai</Title>
          <Text>Freelance UI designer and front-end developer. I create seamless web experiences for end-users.</Text>
          <Social justify={'center'} />
          <ButtonLinkWrapper>{linksHtml}</ButtonLinkWrapper>
        </ContentWrapper>
      </Container>
      <BottomOpacity />
    </PromoSection>
  )
}
const BottomOpacity = styled.div`
  position: absolute;
  bottom: -15px;
  left: 0;
  height: 30px;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
`

const ContentWrapper = styled.div`
  padding: 160px 30px 0 30px;
  max-width: 450px;

  ${FlexWrapper} {
    margin-top: 30px;
  }
`

const Title = styled.h1`
  color: #f5f5f5;
  font-weight: 600;
  font-size: 52px;
  line-height: 78px;
  text-align: center;
  margin: 0;
`

const ButtonLinkWrapper = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-top: 50px;
  gap: 30px;
  list-style: none;

  li {
    display: block;
    border-radius: 2rem;
    transition: all 0.2s;
    &:active {
      ${transformTranslateY('5px')};
    }
  }
  ${ButtonLink} {
    display: block;
    font-size: 16px;
    line-height: 24px;
    font-weight: 600;
    outline: 4px ridge rgba(170, 50, 220, 0.6);
    border-radius: 2rem;
    background: rgba(24, 24, 36, 0.8);
    padding: 12px 25px;
    text-shadow: ${textShadow};
    text-decoration: none;
    transition: all 0.2s;
    ${animationNeon}
    &:hover {
      ${animationScaleIn};
      color: ${theme.colors.mainColor};
      text-shadow: none;
    }
  }
`
const ApproveImg = styled.img`
  width: 250px;
  position: absolute;
  left: 44%;
  top: 13%;
  z-index: 10;
  user-select: none;
`
const PromoSection = styled.section`
  position: relative;
  display: block;
  min-height: 800px;
  background: url(${bgImg}) center center / cover no-repeat;
  padding-top: 100px;
  box-shadow: 0 4px 65px rgba(0, 65, 129, 0.5);
  ${Container} {
    position: relative;
  }

  @media ${theme.media.tabletLarge} {
    ${SectionTitle} {
      font-size: 30px;
      line-height: 38px;
    }
    ${Title} {
      font-size: 48px;
      line-height: 56px;
    }
    ${Text} {
      margin-top: 12px;
    }
    ${ApproveImg} {
      left: 55%;
      top: 14%;
      max-width: 200px;
    }
  }
  @media ${theme.media.tablet} {
    ${ApproveImg} {
      left: 57%;
      top: 10%;
      max-width: 180px;
    }
    ${ContentWrapper} {
      padding-left: 0;
      padding-right: 0;
    }
  }

  @media ${theme.media.mobile} {
    min-height: 700px;

    ${SectionTitle} {
      font-size: 30px;
      line-height: 38px;
    }
    ${Title} {
      font-size: 38px;
      line-height: 44px;
    }
    ${Text} {
      margin-top: 12px;
    }
    ${ApproveImg} {
      left: 10%;
      top: 10%;
    }
    ${ContentWrapper} {
      margin: 0 auto;
      padding-top: 180px;
    }
  }
`
