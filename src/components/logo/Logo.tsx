import styled from 'styled-components'
import ImgLogo from '../../assets/images/logo1_low.png'

export const Logo = () => {
  return (
    <a href="#">
      <LogoImg src={ImgLogo} alt="logo" />
    </a>
  )
}

const LogoImg = styled.img.attrs(({ src, alt }) => ({
  src: src || '',
  alt: alt || '',
}))`
  width: 160px;
  height: 100px;
  object-fit: cover;
`
