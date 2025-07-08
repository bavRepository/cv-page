import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text'
import type { ReactNode } from 'react'
// import { Project } from './projectItem/Project.tsx'
// import { getRndIdValue } from '../../../utils/MathWork.tsx'
import { theme } from '../../../styles/Theme.ts'
import { elementsData } from '../../../Data/ElementsData.tsx'
import { getProjectsElementsFromDataList } from '../../../Data/ModifyElementsData.tsx'

export const Projects = () => {
  const { projectList } = elementsData()
  const projectElementsHtml: ReactNode[] = getProjectsElementsFromDataList(projectList)
  return (
    <SectionProjects>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
          Featured projects:
        </SectionTitle>
        <Text $fontSize={'18px'} $color={'#fff'} $textAlign={'left'} $lineHeight={'1.77778'}>
          I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world
          projects
        </Text>
        <ProjectContentWrapper>{projectElementsHtml}</ProjectContentWrapper>
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
  padding-top: 80px;
  min-height: 600px;
  ${Text} {
    margin-top: 16px;
  }
  @media ${theme.media.tabletLarge} {
    ${ProjectContentWrapper} {
      grid-template-columns: repeat(auto-fill, minmax(300px, 350px));
      grid-template-rows: minmax(300px, auto);
      justify-content: space-evenly;
      //flex-wrap: wrap;
      //display: flex;
      //justify-content: center;
    }
    ${SectionTitle}, ${Text} {
      text-align: center;
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
