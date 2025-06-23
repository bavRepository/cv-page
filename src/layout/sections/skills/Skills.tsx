import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
export const Skills = () => {
  return (
    <StyledMain>
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
            <ContentSubHeader
              $fontWeight={500}
              $fontSize={'24px'}
              $color={'#fff'}
              $textAlign={'left'}
              $lineHeight={'33px'}
            >
              Years of experience. Specialised in building apps, while ensuring a seamless web experience for end users.
            </ContentSubHeader>
          </ExperienceWrapper>
        </DescriptionWrapper>
        <FlexWrapper></FlexWrapper>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  min-height: 800px;
  background: #1a1a29;
  padding: 55px 150px 0 136px;
  ${FlexWrapper} {
  }

  // ${FlexWrapper} {
  //   display: grid;
  //   grid-template-columns: repeat(auto-fill, minmax(200px, 256px));
  //   grid-template-rows: repeat(auto-fill, minmax(200px, 254px));
  // }
`

const TextHeader = styled.h3`
  font-weight: 500;
  font-size: 24px;
  color: #fff;
  text-align: left;
  line-height: 33px;
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
