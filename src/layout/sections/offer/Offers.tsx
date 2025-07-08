import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import styled from 'styled-components'
import { Container } from '../../../components/common/Container.ts'
import type { ReactNode } from 'react'
import { getRndIdValue } from '../../../utils/MathWork.tsx'
import { Offer } from './offerItem/Offer.tsx'
import { theme } from '../../../styles/Theme.ts'
import { elementsData } from '../../../Data/ElementsData.tsx'

export const Offers = () => {
  const { offerList } = elementsData()
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

const SectionOffer = styled.section`
  padding-top: 55px;
  min-height: 800px;
  background: ${theme.colors.mainBgColor};
  ${FlexWrapper} {
    margin-top: 24px;
  }
  @media ${theme.media.tabletLarge} {
    ${SectionTitle} {
      text-align: center;
    }
    ${FlexWrapper} {
      justify-content: space-evenly;
    }
  }
  @media ${theme.media.tablet} {
    ${FlexWrapper} {
      justify-content: center;
    }
    ${SectionTitle} {
      text-align: center;
    }
  }
`
