import styled from 'styled-components'
import { SectionTitle } from '../../components/common/SectionTitle.ts'
import { Container } from '../../components/common/Container.ts'
import { Text } from '../../components/common/Text.ts'
import { FlexWrapper } from '../../components/common/FlexWrapper.ts'
import { Skill } from '../../components/skill/Skill.tsx'
import { type ReactNode } from 'react'
import { getRndIdValue } from '../../utils/MathWork.tsx'
import { theme } from '../../styles/Theme.ts'

export type ItemListTypeSkill = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $text?: string
  $id?: string
}
const skillList: ItemListTypeSkill[] = [
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

export const Main = () => {
  const renderList: (arr: ItemListTypeSkill[]) => ReactNode[] = (arr: ItemListTypeSkill[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeSkill): ReactNode => {
      return <Skill key={$id} {...item} />
    })
  }

  const addIdToElem: (elements: ItemListTypeSkill[]) => ItemListTypeSkill[] = (elements) => {
    return elements.map((elem) => {
      const strId = getRndIdValue()
      return { ...elem, $id: strId }
    })
  }

  const skillItemsDataWithId = addIdToElem(skillList)
  const skillElementsHtml: ReactNode[] = renderList(skillItemsDataWithId)

  return (
    <SectionMain>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
          About me:
        </SectionTitle>
        <DescriptionWrapper>
          <Text $color={'#fff'} $lineHeight={'1.77'} $fontSize={'18px'} $fontWeight={500} $textAlign={'left'}>
            Hi, my name is Anton Barai, i am a Front-end developer, UI designer, and Mobile developer. I jhave honed my
            skills in Web Development and advance i have core understanding of advance UI design principles. Here are
            the major skills i have.
          </Text>
          <ExperienceTextWrapper>
            <SectionTitle $fontSize={'96px'} $color={`${theme.colors.mainColor}`} $lineHeight={'104px'}>
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
const SectionMain = styled.main`
  min-height: 600px;
  background: ${theme.colors.mainBgColor};
  padding: 85px 0 0 0;
  ${FlexWrapper} {
    margin-top: 30px;
  }
  @media (max-width: 991.98px) {
    ${DescriptionWrapper} {
      ${SectionTitle} {
        font-size: 86px;
        line-height: 94px;
      }
      ${Text} {
        font-size: 17px;
        line-height: 1.6;
      }
      ${ExperienceTextWrapper} {
        margin-top: 20px;
        ${HeaderText} {
          font-weight: 500;
          font-size: 21px;
          line-height: 30px;
        }
      }
    }
  }
`
