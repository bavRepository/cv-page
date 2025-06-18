// import React from 'react';

import styled from 'styled-components'
import { Logo } from '../../components/logo/Logo.tsx'
import { Menu } from '../../components/menu/Menu.tsx'
import { Container } from '../container/Container.tsx'

export const Header = () => {
  return (
    <StyledHeader>
      <Container>
        <NavBlockWrapper>
          <Logo />
          <Menu />
        </NavBlockWrapper>
      </Container>
    </StyledHeader>
  )
}

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  min-height: 60px;
  left: 0px;
  top: 0px;
  background: #181824;
`

const NavBlockWrapper = styled.div`
  display: flex;
  min-height: 60px;
  align-items: center;
  justify-content: space-between;
  padding: 0 30px;
`
