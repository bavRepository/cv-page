import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import styled from 'styled-components'
import { animationScaleIn } from '../animation/Animation.tsx'
import { FlexWrapper } from '../common/FlexWrapper.ts'

export const Social = ({ margin, justify }: { margin?: string; justify?: string }) => {
  return (
    <SocialElementContainer $margin={margin}>
      <FlexWrapper $justify={justify} $gap={'18px'}>
        <SocialIconContainer>
          <FaceBook />
        </SocialIconContainer>

        <SocialIconContainer>
          <Instagram />
        </SocialIconContainer>

        <SocialIconContainer>
          <LinkedIn />
        </SocialIconContainer>

        <SocialIconContainer>
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
`

const SocialElementContainer = styled.div<{ $margin?: string }>`
  margin: ${(props) => props.$margin || '0'};
  ${FlexWrapper} {
    margin-top: 20px;
  }
`

const FaceBook = styled(FaFacebook)``
const Instagram = styled(PiInstagramLogoFill)``
const LinkedIn = styled(FaLinkedin)``
const Telegram = styled(FaTelegram)``
