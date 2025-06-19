import { IconContext } from 'react-icons'
import { FaFacebook, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { PiInstagramLogoFill } from 'react-icons/pi'
import styled from 'styled-components'
export const Social = () => {
  return (
    <SocialWrapper $margin={'20px 0 0 0'} $justifyContent={'center'}>
      <IconContext.Provider value={{ color: 'white', size: '30px' }}>
        <FaFacebook />
        <PiInstagramLogoFill />
        <FaLinkedin />
        <FaTelegram />
      </IconContext.Provider>
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
  cursor: pointer;
`
