import styled from 'styled-components'
import { ButtonLink } from '../../components/common/Button.ts'
import { FlexWrapper } from '../../components/common/FlexWrapper.ts'
import { Text } from '../../components/common/Text.ts'
export const Footer = () => {
  return (
    <SectionFooter>
      <MiddlePartWrapper>
        <FlexWrapper $justify={'space-between'} $gap={'10px'}>
          <ButtonLink>Fullstack Developer</ButtonLink>
          <ButtonLink>UI Designer</ButtonLink>
          <ButtonLink>Data Analyst</ButtonLink>
        </FlexWrapper>
        <Text>@2025 Anton Barai</Text>
      </MiddlePartWrapper>
    </SectionFooter>
  )
}

const SectionFooter = styled.div`
  padding: 258px 0 40px 0;
  background: #1a1a29;
  display: flex;
  justify-content: center;
`
const MiddlePartWrapper = styled.div`
  flex-basis: 452px;
  display: flex;
  flex-direction: column;
  gap: 35px;
  ${ButtonLink},${Text} {
    font-weight: 500;
    font-size: 16px;
    opacity: 0.5;
  }
`
