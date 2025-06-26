import styled from 'styled-components'

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
  $href?: string
  $type?: 'button' | 'submit' | 'reset'
  $name?: string
  $value?: string
  $draggable?: boolean
}

const Button = styled.button.attrs<ButtonAttr>(({ $draggable, $disabled, $value, $type, $name }) => ({
  disabled: $disabled || false,
  value: $value || '',
  name: $name || '',
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
`

const ButtonLink = styled.a.attrs<ButtonAttrLink>(({ $href, $value, $name, $draggable }) => ({
  href: $href || '#',
  value: $value || '',
  name: $name || '',
  draggable: $draggable || false,
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
    color: ${(props) => props.$color || '#7562e0'};
  }
`

export { Button, ButtonLink }
