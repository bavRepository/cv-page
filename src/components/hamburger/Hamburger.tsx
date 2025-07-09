import styled from 'styled-components'

import { theme } from '../../styles/Theme.ts'
import { selectHamburgerState, setHamburgerState } from '../../redux/slices/hamburgerSlice.tsx'

import { useDispatch, useSelector } from 'react-redux'
export const Hamburger = () => {
  const dispatch = useDispatch()
  const activeHamburger = useSelector(selectHamburgerState)

  const handleHamburgerClick = () => {
    dispatch(setHamburgerState())
  }

  const viewActiveHamburger = () => {
    return (
      <>
        <Span $transform={'translateY(3px) rotate(-45deg)'} />
        <Span $transform={'translateY(3px) rotate(45deg)'} />
      </>
    )
  }
  //aria-modal true nav
  return (
    <HamburgerWrapper aria-label={activeHamburger ? 'Open menu' : 'Close menu'} onClick={handleHamburgerClick}>
      {activeHamburger ? (
        viewActiveHamburger()
      ) : (
        <>
          <Span />
          <Span />
          <Span />
        </>
      )}
    </HamburgerWrapper>
  )
}

export const HamburgerWrapper = styled.div`
  display: block;
  cursor: pointer;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10px;
  padding-top: 8px;
  @media ${theme.media.tablet} {
    right: 10%;
  }
`

const Span = styled.span<{ $transform?: string }>`
  display: block;
  height: 2px;
  width: 30px;
  transition: all 0.25s;
  background-color: #fff;
  margin-top: 4px;
  &:nth-child(1) {
    margin-top: 0;
    transform: ${(props) => props.$transform || 'none'};
    margin-bottom: ${(props) => (props.$transform ? '-5px' : '0')};
  }
  &:nth-child(2) {
    transform: ${(props) => props.$transform || 'none'};
  }
  &:nth-child(3) {
    transform: ${(props) => props.$transform || 'none'};
    margin-bottom: ${(props) => (props.$transform ? '-5px' : '0')};
  }
`
