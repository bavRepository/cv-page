import styled from 'styled-components'
import { ButtonLink } from '../../components/common/Button.ts'
import { FlexWrapper } from '../../components/common/FlexWrapper.ts'
import { Text } from '../../components/common/Text.ts'
import { Container } from '../../components/common/Container.ts'
import { theme } from '../../styles/Theme.ts'
export const Footer = () => {
  return (
    <SectionFooter>
      <Container>
        <MiddlePartWrapper>
          <FlexWrapper $justify={'space-between'} $gap={'20px'} $wrap={'wrap'}>
            <ButtonLink>Fullstack Developer</ButtonLink>
            <ButtonLink>UI Designer</ButtonLink>
            <ButtonLink>Data Analyst</ButtonLink>
          </FlexWrapper>
          <Text>@2025 Anton Barai</Text>
        </MiddlePartWrapper>
      </Container>
    </SectionFooter>
  )
}

const MiddlePartWrapper = styled.div`
  max-width: 452px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 35px;

  ${ButtonLink},${Text} {
    font-weight: 500;
    font-size: 16px;
    opacity: 0.5;
  }
`
const SectionFooter = styled.div`
  padding: 200px 0 40px 0;
  background: ${theme.colors.mainBgColor};
  @media (max-width: 991.98px) {
    padding-top: 80px;
  }
`
