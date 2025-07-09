import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import styled from 'styled-components'
import { Container } from '../../../components/common/Container.ts'
import { theme } from '../../../styles/Theme.ts'
import { elementsData } from '../../../data/ElementsData.tsx'
import { getOffersElementsFromDataList } from '../../../data/ModifyElementsData.tsx'
export const Offers = () => {
  const { offerList } = elementsData()

  const offersElements = getOffersElementsFromDataList(offerList)

  return (
    <SectionOffer>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
          The services i offer:
        </SectionTitle>
        <FlexWrapper $wrap={'wrap'} $gap={'23px'} $justify={'space-between'}>
          {offersElements}
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
