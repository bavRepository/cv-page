import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'

export const Offer = () => {
  return (
    <SectionOffer>
      <SectionTitle></SectionTitle>
      <FlexWrapper></FlexWrapper>
    </SectionOffer>
  )
}

const SectionOffer = styled.div`
  padding-top: 55px;
  min-height: 800px;
  background: #1a1a29;
`
