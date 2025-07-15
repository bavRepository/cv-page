import styled from 'styled-components'
import { Link } from 'react-scroll'

type ButtonWrapperProps = {
  $fontWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700 | 900
  $fontSize?: string
  $lineHeight?: string
  $color?: string
  $margin?: string
  $padding?: string
  $width?: string
  $height?: string
  $background?: string
  $borderRadius?: string
  $textDecoration?: string
}

type ButtonAttr = {
  $disabled?: boolean
  $type?: 'button' | 'submit' | 'reset'
  $name?: string
  $value?: string
  $draggable?: boolean
}

type ButtonAttrLink = {
  $type?: 'button' | 'submit' | 'reset'
  $name?: string
  $value?: string
  $draggable?: boolean
  $href?: string
}

const Button = styled.button.attrs<ButtonAttr>(({ $draggable, $disabled, $type }) => ({
  disabled: $disabled || false,
  type: $type || 'button',
  draggable: $draggable || false,
}))<ButtonWrapperProps>`
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  font-size: ${(props) => props.$fontSize || 'inherit'};
  line-height: ${(props) => props.$lineHeight || 'inherit'};
  font-weight: ${(props) => props.$fontWeight || 600};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  color: ${(props) => props.$color || '#fff'};
  background: ${(props) => props.$background || 'transparent'};
  user-select: none;
  cursor: pointer;
`

const ButtonLink = styled(Link).attrs<ButtonAttrLink>(({ $draggable, $href }) => ({
  draggable: $draggable || false,
  href: $href || '#',
}))<ButtonWrapperProps>`
  width: ${(props) => props.$width || 'auto'};
  height: ${(props) => props.$height || 'auto'};
  font-size: ${(props) => props.$fontSize || 'inherit'};
  line-height: ${(props) => props.$lineHeight || 'inherit'};
  font-weight: ${(props) => props.$fontWeight || 600};
  text-decoration: ${(props) => props.$textDecoration || 'none'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  color: ${(props) => props.$color || '#fff'};
  background: ${(props) => props.$background || 'transparent'};
  user-select: none;
  &:hover {
    color: ${(props) => props.$color || '${theme.colors.mainColor}'};
  }
  cursor: pointer;
`

export { Button, ButtonLink }
