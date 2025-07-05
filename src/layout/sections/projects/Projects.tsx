import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text'
import type { ReactNode } from 'react'
import { Project } from './projectItem/Project.tsx'
import { getRndIdValue } from '../../../utils/MathWork.tsx'
import { theme } from '../../../styles/Theme.ts'

export type ItemListTypeProject = {
  $id?: string
  $img: string
  $alt?: string
  $title?: string
  $text?: string
  $viewLive?: string
  $gitHubRepo?: string
}

const projectList: ItemListTypeProject[] = [
  {
    $img: './uber.jpeg',
    $alt: 'uber',
    $title: 'UBER',
    $text: 'The website of the uber service where you can get acquainted with all the features of this company',
    $viewLive: 'https://bavrepository.github.io/Projects/UberNew/src/',
    $gitHubRepo: 'https://github.com/bavRepository/bavRepository.github.io/tree/main/Projects/UberNew/src',
  },
  {
    $img: './fit.jpg',
    $alt: 'fit',
    $title: 'HEALTHY EATING',
    $text: 'Healthy eating site that also has a calorie calculator',
    $viewLive: 'https://bavrepository.github.io/Projects/Fit/src/',
    $gitHubRepo: 'https://github.com/bavRepository/bavRepository.github.io/tree/main/Projects/Fit/src',
  },
  {
    $img: './pulse.jpeg',
    $alt: 'pulse',
    $title: 'PULSOMETER',
    $text: 'Website presentation and sale of products heart rate monitor',
    $viewLive: 'https://bavrepository.github.io/Projects/PulsometerNew/src/',
    $gitHubRepo: 'https://github.com/bavRepository/bavRepository.github.io/tree/main/Projects/PulsometerNew/src',
  },
]
export const Projects = () => {
  const renderList: (arr: ItemListTypeProject[]) => ReactNode[] = (arr: ItemListTypeProject[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeProject): ReactNode => {
      return <Project key={$id} {...item} />
    })
  }

  const addIdToElem: (elements: ItemListTypeProject[]) => ItemListTypeProject[] = (elements) => {
    return elements.map((elem) => {
      const strId = getRndIdValue()
      return { ...elem, $id: strId }
    })
  }

  const projectItemsDataWithId = addIdToElem(projectList)
  const projectElementsHtml: ReactNode[] = renderList(projectItemsDataWithId)
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

  grid-auto-rows: minmax(417px, auto);

  gap: 23px;
  justify-content: space-between;
`
const SectionProjects = styled.section`
  padding-top: 80px;
  min-height: 600px;
  ${Text} {
    margin-top: 16px;
  }
  @media (max-width: 992px) {
    ${ProjectContentWrapper} {
      grid-template-columns: repeat(auto-fill, minmax(400px, auto));
      grid-template-rows: minmax(400px, auto);
      justify-content: center;
    }
    ${SectionTitle}, ${Text} {
      text-align: center;
    }
  }
`
