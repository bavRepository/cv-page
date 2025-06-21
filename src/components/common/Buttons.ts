import styled from 'styled-components'

type ButtonWrapperProps = {
  $display?: 'block' | 'flex' | 'none'
  $justifyContent?: string
  $alignItems?: string
  $fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900
  $fontSize?: string
  $lineHeight?: string
  $color?: string
  $margin?: string
  $padding?: string
  $textAlign?: 'center' | 'left' | 'right'
  $width?: string
  $height?: string
  $background?: string
  $borderRadius?: string
  $border?: string
  $textDecoration?: string
  $outline?: string
  $textShadow?: string
  $boxShadow?: string
}

type ButtonAttr = {
  $disable?: boolean
  $type?: 'button' | 'submit' | 'reset'
  $name?: string
  $value?: string
  $draggable?: boolean
}

type ButtonAttrLink = {
  $href?: string
  $type?: 'button' | 'submit' | 'reset'
  $name?: string
  $value?: string
  $draggable?: boolean
}

const Button = styled.button.attrs<ButtonAttr>(({ $disable, $value, $type, $name, $draggable }) => ({
  disable: $disable || false,
  value: $value || '',
  name: $name || '',
  type: $type || 'button',
  draggable: $draggable || false,
}))<ButtonWrapperProps>`
  display: ${(props) => props.$display || 'block'};
  justify-content: ${(props) => props.$justifyContent || 'none'};
  align-items: ${(props) => props.$alignItems || 'none'};
  font-weight: ${(props) => props.$fontWeight || 600};
  font-size: ${(props) => props.$fontSize || 'inherit'};
  line-height: ${(props) => props.$lineHeight || 'inherit'};
  width: ${(props) => props.$width || 'auto'};
  $height: ${(props) => props.$height || 'auto'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  border-radius: ${(props) => props.$borderRadius || '0'};
  border: ${(props) => props.$border || 'none'};
  text-shadow: ${(props) => props.$textShadow || 'none'};
  box-shadow: ${(props) => props.$boxShadow || '0'};
  outline: ${(props) => props.$outline || 'none'};
  text-align: ${(props) => props.$textAlign || 'center'};
  color: ${(props) => props.$color || '#fff'};
  background: ${(props) => props.$background || 'transparent'};
`

const ButtonLink = styled.a.attrs<ButtonAttrLink>(({ $href, $value, $name, $draggable }) => ({
  href: $href || '#',
  value: $value || '',
  name: $name || '',
  draggable: $draggable || 'false',
}))<ButtonWrapperProps>`
  font-weight: ${(props) => props.$fontWeight || 600};
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  font-size: ${(props) => props.$fontSize || 'inherit'};
  line-height: ${(props) => props.$lineHeight || 'inherit'};
  text-decoration: ${(props) => props.$textDecoration || 'none'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  color: ${(props) => props.$color || '#fff'};
  background: ${(props) => props.$background || 'transparent'};
`

export { Button, ButtonLink }
