import styled from 'styled-components'

type ButtonWrapperProps = {
  $display?: 'block' | 'flex' | 'none'
  $justifyContent?: string
  $alignItems?: string
  $fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '900'
  $fontSize?: string
  $lineHeight?: string
  $color?: string
  $margin?: string
  $padding?: string
  $textAlign?: 'center' | 'left' | 'right'
}

type ButtonAttr = {
  $href?: string
  $disable?: boolean
  $type?: 'button' | 'submit' | 'reset'
  $name?: string
  $value?: string
}

const Button = styled.button.attrs<ButtonAttr>(({ $disable, $value, $type, $name }) => ({
  disable: $disable || false,
  value: $value || '',
  name: $name || '',
  type: $type || 'button',
}))<ButtonWrapperProps>`
  display: ${(props) => props.$display || 'block'};
  justify-content: ${(props) => props.$justifyContent || 'none'};
  align-items: ${(props) => props.$alignItems || 'none'};
  font-weight: ${(props) => props.$fontWeight || '400'};
  font-size: ${(props) => props.$fontSize || 'inherit'};
  line-height: ${(props) => props.$lineHeight || 'inherit'};
  color: ${(props) => props.$color || '#fff'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

const ButtonHref = styled.a.attrs<ButtonAttr>(({ $href, $value, $name }) => ({
  href: $href || '#',
  value: $value || '',
  name: $name || '',
}))<ButtonWrapperProps>`
  display: ${(props) => props.$display || 'block'};
  justify-content: ${(props) => props.$justifyContent || 'none'};
  align-items: ${(props) => props.$alignItems || 'none'};
  font-weight: ${(props) => props.$fontWeight || '400'};
  font-size: ${(props) => props.$fontSize || 'inherit'};
  line-height: ${(props) => props.$lineHeight || 'inherit'};
  color: ${(props) => props.$color || '#fff'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

export { Button, ButtonHref }
