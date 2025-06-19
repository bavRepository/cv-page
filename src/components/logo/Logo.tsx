import styled, { keyframes } from 'styled-components'
import logoImg from '../../assets/images/logo.png'
export const Logo = () => {
  return (
    <LogoImg href="#" draggable={false}>
      <img src={logoImg} alt="logo" draggable={false} />
    </LogoImg>
  )
}
const scaleIn = keyframes`
    0% { transform: scale(1) rotateX(0) skewX(0);}
  15% { transform: scale(0.93) rotateX(6deg) skewX(6deg);}
  100% { transform: scale(1); rotateX(0) skewX(0);}
`

const LogoImg = styled.a.attrs(({ draggable }) => ({
  draggable: draggable || 'false',
}))`
  display: block;
  height: 64px;
  outline: 2px ridge rgba(170, 50, 220, 0.6);
  border-radius: 2rem;
  user-select: none;
  &:hover {
    animation: ${scaleIn} 0.4s ease-out;
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
