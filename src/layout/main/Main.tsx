import styled from 'styled-components'
import { SectionTitle } from '../../components/common/SectionTitle.ts'
import { Container } from '../../components/common/Container.ts'
import { Text } from '../../components/common/Text.ts'
import { FlexWrapper } from '../../components/common/FlexWrapper.ts'
import { Skill } from '../sections/skills/Skill.tsx'
import { type ReactNode } from 'react'
import { addIdToElem } from '../../utils/СhangingDataElements.tsx'
export const Main = () => {
  type ItemListType = {
    $iconId: string
    $width?: string
    $height?: string
    $viewBox?: string
    $text?: string
    $id?: string
  }

  const skillList: ItemListType[] = [
    {
      $iconId: 'rulerPan',
      $width: '42',
      $height: '42',
      $viewBox: '0 0 42 42',
      $text: 'UI & UX\n' + 'DESIGNING',
    },
    {
      $iconId: 'code',
      $width: '52',
      $height: '52',
      $viewBox: '0 0 52 52',
      $text: 'WEB\n' + 'DEVELOPMENT',
    },
    {
      $iconId: 'android',
      $width: '62',
      $height: '62',
      $viewBox: '0 0 62 62',
      $text: 'MOBILE\n' + 'DEVELOPMENT',
    },
    {
      $iconId: 'python',
      $width: '55',
      $height: '55',
      $viewBox: '0 0 55 55',
      $text: 'WEB SCRAPING\n' + 'WITH PYTHON',
    },
  ]

  const renderList: (arr: ItemListType[]) => ReactNode[] = (arr: ItemListType[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListType): ReactNode => {
      return <Skill key={$id} {...item} />
    })
  }

  const offerItemsDataWithId = addIdToElem(skillList)
  const skillElementsHtml: ReactNode[] = renderList(offerItemsDataWithId)

  return (
    <SectionMain>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={'#7562e0'} $textAlign={'left'}>
          About me:
        </SectionTitle>
        <DescriptionWrapper>
          <Text $color={'#fff'} $lineHeight={'1.77'} $fontSize={'18px'} $fontWeight={500} $textAlign={'left'}>
            Hi, my name is Anton Barai, i am a Front-end developer, UI designer, and Mobile developer. I jhave honed my
            skills in Web Development and advance i have core understanding of advance UI design principles. Here are
            the major skills i have.
          </Text>
          <ExperienceTextWrapper>
            <SectionTitle $fontSize={'96px'} $color={'#7562e0'} $lineHeight={'104px'}>
              5+
            </SectionTitle>
            <HeaderText>
              Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
            </HeaderText>
          </ExperienceTextWrapper>
        </DescriptionWrapper>
        <FlexWrapper $wrap={'wrap'} $gap={'17px'} $justify={'space-between'}>
          {skillElementsHtml}
        </FlexWrapper>
      </Container>
    </SectionMain>
  )
}

const SectionMain = styled.main`
  min-height: 600px;
  background: #1a1a29;
  padding: 85px 0 0 0;
  ${FlexWrapper} {
    margin-top: 30px;
  }
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`

const ExperienceTextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin-top: 10px;
`
const HeaderText = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  text-align: left;
  line-height: 33px;
`
