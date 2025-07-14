import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import { type ReactNode } from 'react'
import { theme } from '../../../styles/Theme.ts'
import { elementsData } from '../../../data/ElementsData.tsx'
import { ModifyElementsData } from '../../../data/ModifyElementsData.tsx'
import { Fade, Slide } from 'react-awesome-reveal'
export const Skills = () => {
  const { skillList } = elementsData()
  const modifyOfferElementsData = ModifyElementsData()
  const skillElementsHtml: ReactNode[] = modifyOfferElementsData.getSkillsElementsFromDataList(skillList)

  return (
    <StyledSkills id="aboutmeSection">
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
          <Fade damping={0.15} cascade={true} direction={'down'}>
            {skillElementsHtml}
          </Fade>
        </FlexWrapper>
      </Container>
    </StyledSkills>
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
const StyledSkills = styled.section`
  position: relative;
  min-height: 600px;
  background: ${theme.colors.mainBgColor};
  padding: 95px 0 0 0;
  ${FlexWrapper} {
    margin-top: 50px;
  }
  @media ${theme.media.tabletLarge} {
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
    ${FlexWrapper} {
      display: grid;
      grid-template-columns: repeat(2, auto);
      justify-content: space-evenly;
    }
  }

  /* @media (max-width: 768px) {*/
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      //grid-template-columns: repeat(auto-fill, minmax(200px, auto));
      gap: 23px;
    }
  }
  @media ${theme.media.mobile} {
    ${DescriptionWrapper} {
      ${Text} {
        font-size: 16px;
        line-height: 1.6;
      }
      ${ExperienceTextWrapper} {
        ${HeaderText} {
          font-weight: 500;
          font-size: 20px;
          line-height: 29px;
        }
      }
    }
    ${FlexWrapper} {
      grid-template-columns: minmax(200px, auto);
    }
  }
`
