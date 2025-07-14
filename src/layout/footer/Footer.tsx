import styled from 'styled-components'
import { ButtonLink } from '../../components/common/Button.ts'
import { FlexWrapper } from '../../components/common/FlexWrapper.ts'
import { Text } from '../../components/common/Text.ts'
import { Container } from '../../components/common/Container.ts'
import { theme } from '../../styles/Theme.ts'
export const Footer = () => {
  return (
    <StyledFooter>
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
    </StyledFooter>
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
const StyledFooter = styled.section`
  position: relative;
  background: ${theme.colors.mainBgColor};
  padding: 170px 0 40px 0;
  ${ButtonLink} {
    &:hover {
      color: ${theme.colors.mainColor};
    }
  }
  @media ${theme.media.tabletLarge} {
    padding-top: 80px;
  }
  @media ${theme.media.mobile} {
    ${MiddlePartWrapper} {
      ${FlexWrapper} {
        justify-content: center;
        gap: 20px 45px;
      }
    }
  }
`
