import styled from 'styled-components'
import { useState } from 'react'

export const Hamburger = () => {
  const [hamburgerActive, setHamburgerActive] = useState(false)
  const handleHamburgerClick = () => {
    setHamburgerActive(!hamburgerActive)
  }
  const closeHamburger = () => {
    return (
      <>
        <Span $transform={'translateY(3px) rotate(-45deg)'} />
        <Span />
        <Span $transform={'translateY(3px) rotate(45deg)'} />
      </>
    )
  }
  return (
    <HamburgerWrapper onClick={handleHamburgerClick}>
      {hamburgerActive ? (
        closeHamburger()
      ) : (
        <>
          <Span />
          <Span $display={'block'} />
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
`

const Span = styled.span<{ $transform?: string; $display?: string }>`
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
    display: ${(props) => props.$display || 'none'};
    transform: ${(props) => props.$transform || 'none'};
  }
  &:nth-child(3) {
    transform: ${(props) => props.$transform || 'none'};
    margin-bottom: ${(props) => (props.$transform ? '-5px' : '0')};
  }
`
