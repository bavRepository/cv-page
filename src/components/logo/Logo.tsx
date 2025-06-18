import styled from 'styled-components'
import logoImg from '../../assets/images/logo.png'
export const Logo = () => {
  return (
    <LogoImg href="#">
      <img src={logoImg} alt="logo" />
    </LogoImg>
  )
}

const LogoImg = styled.a`
  display: block;
  height: 64px;
  img {
    width: 160px;
    object-fit: cover;
  }
`
