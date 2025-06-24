import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Container } from '../../../components/common/Container.ts'
import { Text } from '../../../components/common/Text'
import type { ReactNode } from 'react'
import { addIdToElem } from '../../../utils/СhangingDataElements.tsx'
import { Project } from './projectItem/Project.tsx'

export const Projects = () => {
  type ItemListType = {
    $id?: string
    $img: string
    $alt?: string
    $title?: string
    $text?: string
    $viewLive?: string
    $gitHubRepo?: string
  }

  const projectList: ItemListType[] = [
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

  const renderList: (arr: ItemListType[]) => ReactNode[] = (arr: ItemListType[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListType): ReactNode => {
      return <Project key={$id} {...item} />
    })
  }

  const offerItemsDataWithId = addIdToElem(projectList)
  const skillElementsHtml: ReactNode[] = renderList(offerItemsDataWithId)

  return (
    <SectionProjects>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={'#7562e0'} $textAlign={'left'}>
          Featured projects:
        </SectionTitle>
        <Text $fontSize={'18px'} $color={'#fff'} $textAlign={'left'} $lineHeight={'1.77778'}>
          I have worked on many projects over the course of being a Web Developer, here are a few of my live, real-world
          projects
        </Text>
        <ProjectContentWrapper>{skillElementsHtml}</ProjectContentWrapper>
      </Container>
    </SectionProjects>
  )
}

const SectionProjects = styled.section`
  padding-top: 80px;
  min-height: 600px;
  background: #1a1a29;
  ${Text} {
    margin-top: 16px;
  }
`
const ProjectContentWrapper = styled.div`
  margin-top: 36px;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 324px));
  grid-template-rows: minmax(300px, auto);
  grid-auto-rows: minmax(417px, auto);
  gap: 23px;
  justify-content: space-between;
`
