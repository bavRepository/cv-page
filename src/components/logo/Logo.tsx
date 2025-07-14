import styled from 'styled-components'
import logoImg from '../../assets/images/logo.png'
import { animationScaleInSkew } from '../animation/Animation.tsx'
import { Link, animateScroll as scroll } from 'react-scroll'

export const Logo = () => {
  return (
    <LogoLink onClick={() => scroll.scrollToTop()}>
      <img src={logoImg} alt="logo" draggable={false} />
    </LogoLink>
  )
}
const LogoLink = styled(Link).attrs(({ draggable }) => ({
  draggable: draggable || 'false',
}))`
  display: block;
  height: 64px;
  outline: 2px ridge rgba(170, 50, 220, 0.6);
  border-radius: 2rem;
  user-select: none;
  &:hover {
    ${animationScaleInSkew}
  }
  box-shadow:
    5px 5px 30px rgba(255, 255, 255, 0.1),
    -5px -5px 30px rgba(255, 255, 255, 0.1);
  img {
    outline: 2px ridge rgba(170, 50, 220, 0.6);
    border-radius: 2rem;
    width: 160px;
    object-fit: cover;
  }
`
