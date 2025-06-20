import { Container } from '../container/Container.tsx'
import styled from 'styled-components'
import bgImg from '../../assets/images/bg-main.jpg'
import { Social } from '../../components/social/Social.tsx'
import { SubTitle, Title, Descr } from '../../components/styles/Titles.tsx'
import { ButtonLink } from '../../components/styles/Buttons.tsx'
import approvedImg from '../../assets/images/approved.png'
import type { ReactNode } from 'react'
import { addIdToElem } from '../../utils/ElemAddingData.tsx'
import { animationBlinkMixin, animationNeonMixin, animationScaleInMixin } from '../../components/mixins/Mixins.tsx'

const textShadow = '0 -40px 100px,0 0 2px,0 0 1em #bfe2ff,0 0 0.5em #bfe2ff,0 0 0.1em #bfe2ff;'

export const Promo = () => {
  type MenuItemRender = {
    $id?: string
    $name?: string
    $fontSize?: string
    $lineHeight?: string
    $padding?: string
    $background?: string
    $borderRadius?: string
    $textShadow?: string
    $draggable?: boolean
  }

  const btnListNoId = [
    {
      $name: 'About me',
      $fontSize: '16px',
      $lineHeight: '24px',
      $padding: '12px 25px',
      $background: '#7562e0',
      $borderRadius: '8px',
      $textShadow: textShadow,
      draggable: false,
    },
    {
      $name: 'Projects',
      $fontSize: '16px',
      $lineHeight: '24px',
      $padding: '12px 25px',
      $background: '#7562e0',
      $borderRadius: '8px',
      $textShadow: textShadow,
      draggable: false,
    },
  ]

  const renderItem: (arr: MenuItemRender[]) => ReactNode[] = (arr: MenuItemRender[]): ReactNode[] => {
    return arr.map(({ $name, $id, ...elemDataObj }: MenuItemRender) => {
      try {
        if (!$name) {
          throw new Error('$name has no length')
        }
        const getRandomIndex: number = Math.floor(Math.random() * $name.length)
        const tmpChar = `<span>${$name[getRandomIndex]}</span>`
        const $modifiedName = `${$name.slice(0, getRandomIndex)}${tmpChar}${$name.slice(getRandomIndex + 1)}`
        return <ButtonLink key={$id} {...elemDataObj} dangerouslySetInnerHTML={{ __html: $modifiedName }}></ButtonLink>
      } catch (error) {
        console.log(error)
      }
    })
  }

  const btnListWithId: MenuItemRender[] = addIdToElem(btnListNoId)
  const btnElementsHtml: ReactNode[] = renderItem(btnListWithId)

  return (
    <PromoSection>
      <Container $display={'flex'}>
        <Wrapper>
          <SubTitle>Hello, i’m</SubTitle>
          <Title $color={'#f5f5f5'}>Anton Barai</Title>
          <Descr>Freelance UI designer and front-end developer. I create seamless web experiences for end-users.</Descr>
          <Social></Social>
          <ImgWrapper>
            <img src={approvedImg} alt="approved" />
          </ImgWrapper>
          <BtnGroupWrapper>{btnElementsHtml}</BtnGroupWrapper>
        </Wrapper>
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
const Wrapper = styled.div`
  padding: 160px 30px 0 30px;
  max-width: 450px;
  position: relative;
`
const ImgWrapper = styled.div`
  width: 50%;
  position: absolute;
  right: -44%;
  bottom: 35%;
  z-index: 10;
  img {
    width: 100%;
  }
`
const BtnGroupWrapper = styled.div`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  ${ButtonLink} {
    outline: 4px ridge rgba(170, 50, 220, 0.6);
    border-radius: 2rem;
    background: rgba(24, 24, 36, 0.8);
    ${animationNeonMixin}
    &:hover {
      ${animationScaleInMixin};
      color: #7562e0;
      text-shadow: none;
    }
    span {
      ${animationBlinkMixin}
    }
  }
`
