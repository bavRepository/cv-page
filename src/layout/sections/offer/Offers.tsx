import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import styled from 'styled-components'
import { Container } from '../../../components/common/Container.ts'
import type { ReactNode } from 'react'
import { getRndIdValue } from '../../../utils/MathWork.tsx'
import { Offer } from './offerItem/Offer.tsx'
import { theme } from '../../../styles/Theme.ts'

export type ItemListTypeOffer = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $header?: string
  $text?: string
  $id?: string
}
const offerList: ItemListTypeOffer[] = [
  {
    $iconId: 'rulerPan',
    $width: '56',
    $height: '56',
    $viewBox: '0 0 40 40',
    $header: 'UI & UX DESIGNING',
    $text: 'I design beautiful web iterfaces with Figma and Adove XD',
  },
  {
    $iconId: 'code',
    $width: '57',
    $height: '57',
    $viewBox: '0 0 50 50',
    $header: 'WEB DEVELOPMENT',
    $text:
      'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS',
  },
  {
    $iconId: 'android',
    $width: '60',
    $height: '60',
    $viewBox: '0 0 55 60',
    $header: 'MOBILE DEVELOPMENT',
    $text: 'I am an expert mobile developer. I have experience using Flutter and React Native.',
  },
  {
    $iconId: 'git',
    $width: '62',
    $height: '62',
    $viewBox: '0 0 62 62',
    $header: 'VERSION CONTROL',
    $text: 'I can use version control systems well, and Git & Mecurial are my go-to tool.',
  },
  {
    $iconId: 'js',
    $width: '54',
    $height: '54',
    $viewBox: '0 0 54 54',
    $header: 'NPM AND NODEJS',
    $text: 'I have core understanding of NPM. I can also develop general purpose applications with NodeJS',
  },
  {
    $iconId: 'webScrapping',
    $width: '48',
    $height: '48',
    $viewBox: '0 0 48 48',
    $header: 'WEB SCRAPING',
    $text: 'I can collect content and data from the internet then manipulate and analyze as needed.',
  },
]

export const Offers = () => {
  const renderList: (arr: ItemListTypeOffer[]) => ReactNode[] = (arr: ItemListTypeOffer[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeOffer): ReactNode => {
      return <Offer key={$id} {...item} />
    })
  }

  const addIdToElem: (elements: ItemListTypeOffer[]) => ItemListTypeOffer[] = (elements) => {
    return elements.map((elem) => {
      const strId = getRndIdValue()
      return { ...elem, $id: strId }
    })
  }

  const offerItemsDataWithId = addIdToElem(offerList)
  const offerElementsHtml: ReactNode[] = renderList(offerItemsDataWithId)

  return (
    <SectionOffer>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
          The services i offer:
        </SectionTitle>
        <FlexWrapper $wrap={'wrap'} $gap={'23px'} $justify={'space-between'}>
          {offerElementsHtml}
        </FlexWrapper>
      </Container>
    </SectionOffer>
  )
}

const SectionOffer = styled.div`
  padding-top: 55px;
  min-height: 800px;
  background: ${theme.colors.mainBgColor};
  @media (max-width: 1199.98px) {
    ${FlexWrapper} {
      //justify-content: center;
    }
  }
`
