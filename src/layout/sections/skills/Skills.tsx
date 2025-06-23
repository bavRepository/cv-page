import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import { Skill } from './skill/Skill.tsx'
import { type ReactNode } from 'react'
export const Skills = () => {
  const ItemList: ItemListType[] = [
    {
      $iconId: 'rulerPan',
      $width: '42',
      $height: '42',
      $viewBox: '0 0 42 42',
    },
    {
      $iconId: 'code',
      $width: '52',
      $height: '52',
      $viewBox: '0 0 52 52',
    },
    {
      $iconId: 'android',
      $width: '62',
      $height: '62',
      $viewBox: '0 0 62 62',
    },
    {
      $iconId: 'python',
      $width: '55',
      $height: '55',
      $viewBox: '0 0 55 55',
    },
  ]
  type ItemListType = {
    $iconId: string
    $width?: string
    $height?: string
    $viewBox?: string
  }
  const renderList: (arr: ItemListType[]) => ReactNode[] = (arr: ItemListType[]): ReactNode[] => {
    return arr.map((item: ItemListType): ReactNode => {
      return <Skill {...item} />
    })
  }
  const skillElementsHtml: ReactNode[] = renderList(ItemList)
  return (
    <StyledSkills>
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
          <ExperienceWrapper>
            <SectionTitle $fontSize={'96px'} $color={'#7562e0'} $lineHeight={'104px'}>
              5+
            </SectionTitle>
            <SolidText>
              Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
            </SolidText>
          </ExperienceWrapper>
        </DescriptionWrapper>
        <FlexWrapper $wrap={'wrap'} $gap={'17px'}>
          {skillElementsHtml}
        </FlexWrapper>
      </Container>
    </StyledSkills>
  )
}

const StyledSkills = styled.main`
  min-height: 600px;
  background: #1a1a29;
  padding: 55px 150px 0 136px;
  ${FlexWrapper} {
    margin-top: 60px;
  }
  // ${FlexWrapper} {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(200px, 256px));
  //   grid-template-rows: repeat(auto-fill, minmax(200px, 254px));
  // }
`

const DescriptionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-top: 10px;
`

const ExperienceWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  justify-content: space-between;
  margin-top: 10px;
`
const SolidText = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  text-align: left;
  line-height: 33px;
`
