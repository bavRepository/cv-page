// import { IconContext } from 'react-icons'
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import styled from 'styled-components'
import { animationScaleInMixin } from '../mixins/Mixins.tsx'
export const Social = () => {
  return (
    <SocialWrapper $margin={'20px 0 0 0'} $justifyContent={'center'} $gap={'18px'}>
      {/*<IconContext.Provider value={{ color: 'white', size: '30px' }}>*/}
      {/*<MixinWrapper>*/}
      {/*  <FaFacebook />*/}
      {/*</MixinWrapper>*/}
      <FaceBook />
      <Instagram />
      <LinkedIn />
      <Telegram />
      {/*</IconContext.Provider>*/}
    </SocialWrapper>
  )
}
type SocialWrapperProps = {
  $display?: string
  $direction?: string
  $justifyContent?: string
  $alignItems?: string
  $gap?: string
  $maxWidth?: string
  $maxHeight?: string
  $margin?: string
  $padding?: string
}

// const MixinWrapper = styled.div`
//   &:hover {
//     ${scaleInMixin}
//     box-shadow:
//     2px 2px 26px rgba(255, 255, 255, 0.2),
//     -2px -2px 26px rgba(255, 255, 255, 0.2);
//     border-radius: 100%;
//   }
// `

const SocialWrapper = styled.div<SocialWrapperProps>`
  display: ${(props) => props.$display || 'flex'};
  flex-direction: ${(props) => props.$direction || 'row'};
  justify-content: ${(props) => props.$justifyContent || 'flex-start'};
  align-items: ${(props) => props.$alignItems || 'center'};
  gap: ${(props) => props.$gap || '14px'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  max-width: ${(props) => props.$maxWidth || 'auto'};
  max-height: ${(props) => props.$maxHeight || 'auto'};
`

const FaceBook = styled(FaFacebook)`
  color: white;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    ${animationScaleInMixin};
  }
`

const Instagram = styled(PiInstagramLogoFill)`
  color: white;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    ${animationScaleInMixin};
  }
`

const LinkedIn = styled(FaLinkedin)`
  color: white;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    ${animationScaleInMixin};
  }
`

const Telegram = styled(FaTelegram)`
  color: white;
  font-size: 35px;
  cursor: pointer;
  &:hover {
    ${animationScaleInMixin};
  }
`
