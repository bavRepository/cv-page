// import React from 'react';

import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo.tsx'
import { Menu } from '../../components/menu/Menu.tsx'
import { Container } from '../../components/common/Container.ts'
import { Hamburger } from '../../components/hamburger/Hamburger.tsx'
// import { useState } from 'react'
export const Header = () => {
  // const [addAsideMenu, setAddAsideMenu] = useState(false)
  // const handleOpenAsideMenu = (isOpen) => {
  //   setAddAsideMenu(isOpen)
  // }
  return (
    <StyledHeader>
      <Container>
        <NavBlockWrapper>
          <AsideMenu />

          <Logo />
          <Menu />
        </NavBlockWrapper>
        {/*<Hamburger handleOpenAsideMenu={handleOpenAsideMenu} />*/}
        <Hamburger />
      </Container>
    </StyledHeader>
  )
}

const NavBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px;
  gap: 30px;
  flex-wrap: wrap;
  @media (max-width: 767.98px) {
    justify-content: start;
  }
`
const AsideMenu = styled.div`
  z-index: 30;
  display: flex;
  top: 0;
  left: -100%;
  position: fixed;
  height: 100%;
  width: 100%;
  visibility: hidden;
  opacity: 0;
`

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: #181824;
  z-index: 20;
  ${Container} {
    position: relative;
  }
`
