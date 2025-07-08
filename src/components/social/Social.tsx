import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import styled from 'styled-components'
import { animationScaleIn } from '../animation/Animation.tsx'
import { FlexWrapper } from '../common/FlexWrapper.ts'
import { theme } from '../../styles/Theme.ts'

export const Social = ({ margin, justify, color }: { margin?: string; justify?: string; color?: string }) => {
  return (
    <SocialElementContainer $margin={margin}>
      <FlexWrapper $justify={justify} $gap={'18px'}>
        <SocialIconContainer $color={color}>
          <FaceBook />
        </SocialIconContainer>

        <SocialIconContainer $color={color}>
          <Instagram />
        </SocialIconContainer>

        <SocialIconContainer $color={color}>
          <LinkedIn />
        </SocialIconContainer>

        <SocialIconContainer $color={color}>
          <Telegram />
        </SocialIconContainer>
      </FlexWrapper>
    </SocialElementContainer>
  )
}

type IconWrapperProps = {
  $color?: string
  $fontSize?: string
  $cursor?: string
}

const SocialIconContainer = styled.div<IconWrapperProps>`
  color: ${(props) => props.$color || 'white'};
  font-size: ${(props) => props.$fontSize || '35px'};
  cursor: ${(props) => props.$cursor || 'pointer'};
  &:hover {
    ${animationScaleIn};
  }
  }
`

const SocialElementContainer = styled.div<{ $margin?: string; $color?: string }>`
  margin: ${(props) => props.$margin || '0'};
  ${FlexWrapper} {
    margin-top: 20px;
  }
  @media ${theme.media.tabletLarge} {
    ${FlexWrapper} {
      justify-content: center;
      margin-top: 5px;
    }
`

const FaceBook = styled(FaFacebook)``
const Instagram = styled(PiInstagramLogoFill)``
const LinkedIn = styled(FaLinkedin)``
const Telegram = styled(FaTelegram)``
