import styled, { css } from 'styled-components'

import { theme } from '../../styles/Theme.ts'
import { selectHamburgerState, setHamburgerState } from '../../redux/slices/hamburgerSlice.tsx'

import { useDispatch, useSelector } from 'react-redux'
export const Hamburger = () => {
  const dispatch = useDispatch()
  const activeHamburger = useSelector(selectHamburgerState)

  const handleHamburgerClick = () => {
    dispatch(setHamburgerState())
  }

  return (
    <BurgerBtn
      aria-label={activeHamburger ? 'Open menu' : 'Close menu'}
      onClick={handleHamburgerClick}
      $isOpen={activeHamburger}
    >
      <span />
    </BurgerBtn>
  )
}

export const BurgerBtn = styled.button<{ $isOpen: boolean }>`
  display: block;
  height: 30px;
  width: 30px;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 10%;

  span {
    display: block;
    width: 30px;
    height: 2px;
    background-color: rgba(255, 255, 255, 0.9);
    ${(props) =>
      props.$isOpen &&
      css<{ $isOpen: boolean }>`
        background-color: rgba(255, 255, 255, 0);
      `}

    &::before {
      content: '';
      transition: all 0.5s ease-out;
      display: block;
      width: 30px;
      height: 2px;
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(-6px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(-45deg);
          margin-bottom: -2px;
        `}
    }

    &::after {
      content: '';
      display: block;
      width: 30px;
      height: 2px;
      transition: all 0.5s ease-out;
      background-color: rgba(255, 255, 255, 0.9);
      transform: translateY(4px);
      ${(props) =>
        props.isOpen &&
        css<{ isOpen: boolean }>`
          transform: translateY(0) rotate(45deg);
          margin-bottom: -1px;
        `}
    }
  }
`
