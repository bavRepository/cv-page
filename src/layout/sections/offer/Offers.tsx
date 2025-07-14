import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import styled from 'styled-components'
import { Container } from '../../../components/common/Container.ts'
import { theme } from '../../../styles/Theme.ts'
import { elementsData } from '../../../data/ElementsData.tsx'
import { ModifyElementsData } from '../../../data/ModifyElementsData.tsx'
import { Fade } from 'react-awesome-reveal'
export const Offers = () => {
  const { offerList } = elementsData()

  const modifyOfferElementsData = ModifyElementsData()

  return (
    <SectionOffer>
      <Container>
        <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
          The services i offer:
        </SectionTitle>
        <FlexWrapper $wrap={'wrap'} $gap={'23px'} $justify={'space-between'}>
          <Fade cascade={true} damping={0.2}>
            {modifyOfferElementsData.getOffersElementsFromDataList(offerList)}
          </Fade>
        </FlexWrapper>
      </Container>
    </SectionOffer>
  )
}

const SectionOffer = styled.section`
  position: relative;
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
