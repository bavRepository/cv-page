import styled from 'styled-components'

type TitleWrapperProps = {
  $fontWeight?: '100' | '200' | '300' | '400' | '500' | '600' | '700' | '900'
  $fontSize?: string
  $lineHeight?: string
  $color?: string
  $margin?: string
  $padding?: string
  $textAlign?: 'center' | 'left' | 'right'
}

const Title5278 = styled.h1<TitleWrapperProps>`
  font-weight: ${(props) => props.$fontWeight || '600'};
  font-size: ${(props) => props.$fontSize || '52px'};
  line-height: ${(props) => props.$lineHeight || '78px'};
  color: ${(props) => props.$color || '#fff'}; /*#f5f5f5*/
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

const SubTitle3248 = styled.h2<TitleWrapperProps>`
  font-weight: ${(props) => props.$fontWeight || '600'};
  font-size: ${(props) => props.$fontSize || '32px'};
  line-height: ${(props) => props.$lineHeight || '48px'};
  color: ${(props) => props.$color || '#fff'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

const Descr1827 = styled.div<TitleWrapperProps>`
  font-size: ${(props) => props.$fontSize || '18px'};
  line-height: ${(props) => props.$lineHeight || '27px'};
  color: ${(props) => props.$color || '#fff'};
  margin: ${(props) => props.$margin || '0'};
  padding: ${(props) => props.$padding || '0'};
  font-weight: ${(props) => props.$fontWeight || '500'};
  text-align: ${(props) => props.$textAlign || 'center'};
`

export { Title5278, SubTitle3248, Descr1827 }
