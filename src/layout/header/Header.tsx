// import React from 'react';

import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo.tsx'
import { Menu } from '../../components/menu/Menu.tsx'
import { Container } from '../../components/common/Container.ts'
import { Hamburger } from '../../components/hamburger/Hamburger.tsx'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavBlockWrapper>
          <Logo />
          <Menu />
        </NavBlockWrapper>
        <Hamburger />
      </Container>
    </StyledHeader>
  )
}

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
