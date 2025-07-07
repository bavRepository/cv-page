import styled from 'styled-components'
import { theme } from '../../styles/Theme.ts'

type ContainerWrapperProps = {
  $maxWidth?: string
  $padding?: string
}

export const Container = styled.div<ContainerWrapperProps>`
  margin: 0 auto;
  padding: 0 15px;
  max-width: 1200px;
  width: 100%;
  min-height: 100%;
  border: 1px solid red;
  //@media (max-width: 1200px) {
  //  max-width: 960px;
  //}
  //@media (max-width: 992px) {
  //  max-width: 720px;
  //}
  //@media ${theme.media.tablet} {
  //  max-width: 540px;
  //}
  //@media ${theme.media.mobile} {
  //  max-width: 100%;
  //  padding: 0 15px;
  //}
`
