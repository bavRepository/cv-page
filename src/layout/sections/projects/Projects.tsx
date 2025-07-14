import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text'
import React, { type ReactNode } from 'react'

import { theme } from '../../../styles/Theme.ts'
import { elementsData } from '../../../data/ElementsData.tsx'
import { ModifyElementsData } from '../../../data/ModifyElementsData.tsx'
import { JackInTheBox } from 'react-awesome-reveal'

export const Projects: React.FC = () => {
  const modifyOfferElementsData = ModifyElementsData()
  const { projectList } = elementsData()
  const projectElementsHtml: ReactNode[] = modifyOfferElementsData.getProjectsElementsFromDataList(projectList)
  return (
    <SectionProjects id="projectsSection">
      <Container>
        <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
          Featured projects:
        </SectionTitle>
        <Text $fontSize={'18px'} $color={'#fff'} $textAlign={'left'} $lineHeight={'1.77778'}>
          I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world
          projects
        </Text>
        <ProjectContentWrapper>
          <JackInTheBox damping={0.2}>{projectElementsHtml}</JackInTheBox>
        </ProjectContentWrapper>
      </Container>
    </SectionProjects>
  )
}

const ProjectContentWrapper = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, auto));
  grid-template-rows: minmax(400px, auto);
  grid-auto-rows: minmax(400px, auto);
  gap: 23px;
  justify-content: space-between;
`
const SectionProjects = styled.section`
  position: relative;
  padding-top: 90px;
  min-height: 600px;
  ${Text} {
    margin-top: 16px;
  }
  @media ${theme.media.tabletLarge} {
    ${SectionTitle}, ${Text} {
      text-align: center;
    }
    ${ProjectContentWrapper} {
      grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
      grid-template-rows: minmax(300px, auto);
      justify-content: space-evenly;
    }
  }

  @media ${theme.media.tablet} {
    ${ProjectContentWrapper} {
      grid-template-columns: minmax(200px, auto);
      grid-template-rows: minmax(200px, auto);
      grid-auto-rows: minmax(200px, auto);
    }
  }

  @media ${theme.media.mobile} {
  }
`
