import styled from 'styled-components'
import { HeaderContent, SubHeaderContent } from '../../components/common/Title.ts'
import { Container } from '../../components/common/Container.ts'
import { Text } from '../../components/common/Text.ts'

export const Main = () => {
  return (
    <StyledMain>
      <Container>
        <HeaderContent $fontSize={'32px'} $color={'#7562e0'} $textAlign={'left'}>
          About me:
          <DescriptionWrapper>
            <Text $color={'#fff'} $lineHeight={'1.77'} $fontSize={'18px'} $fontWeight={500} $textAlign={'left'}>
              Hi, my name is Anton Barai, i am a Front-end developer, UI designer, and Mobile developer. I jhave honed
              my skills in Web Development and advance i have core understanding of advance UI design principles. Here
              are the major skills i have.
            </Text>
            <ExperienceWrapper>
              <HeaderContent $fontSize={'96px'} $color={'#7562e0'} $lineHeight={'104px'}>
                5+
              </HeaderContent>
              <SubHeaderContent
                $fontWeight={500}
                $fontSize={'24px'}
                $color={'#fff'}
                $textAlign={'left'}
                $lineHeight={'33px'}
              >
                Years of experience. Specialised in building apps, while ensuring a seamless web experience for end
                users.
              </SubHeaderContent>
            </ExperienceWrapper>
          </DescriptionWrapper>
        </HeaderContent>
      </Container>
    </StyledMain>
  )
}

const StyledMain = styled.main`
  min-height: 800px;
  background: #1a1a29;
  padding: 55px 150px 0 136px;
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
