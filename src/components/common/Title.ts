import styled from 'styled-components'

type TitleWrapperProps = {
  $fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900
  $fontSize?: string
  $lineHeight?: string
  $color?: string
  $width?: string
  $height?: string
  $margin?: string
  $padding?: string
  $textAlign?: 'center' | 'left' | 'right'
}

const Header = styled.h2<TitleWrapperProps>`
  font-weight: ${(props) => props.$fontWeight || '600'};
  font-size: ${(props) => props.$fontSize || '32px'};
  line-height: ${(props) => props.$lineHeight || '48px'};
  color: ${(props) => props.$color || '#fff'};
  width: ${(props) => props.$width || 'auto'};
  $height: ${(props) => props.$height || 'auto'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

const SubHeader = styled.h3<TitleWrapperProps>`
  font-weight: ${(props) => props.$fontWeight || '600'};
  font-size: ${(props) => props.$fontSize || '32px'};
  line-height: ${(props) => props.$lineHeight || '48px'};
  color: ${(props) => props.$color || '#fff'};
  width: ${(props) => props.$width || 'auto'};
  $height: ${(props) => props.$height || 'auto'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

export { Header, SubHeader }
