import styled from 'styled-components'
type TextPropsType = {
  $fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '900'
  $fontSize?: string
  $lineHeight?: string
  $color?: string
  $width?: string
  $height?: string
  $margin?: string
  $padding?: string
  $textAlign?: 'center' | 'left' | 'right'
}

export const Text = styled.p<TextPropsType>`
  font-size: ${(props) => props.$fontSize || '18px'};
  line-height: ${(props) => props.$lineHeight || '27px'};
  color: ${(props) => props.$color || '#fff'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  font-weight: ${(props) => props.$fontWeight || '500'};
  text-align: ${(props) => props.$textAlign || 'center'};
`
