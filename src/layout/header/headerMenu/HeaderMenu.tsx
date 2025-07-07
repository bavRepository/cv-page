// import React from 'react';

import styled from 'styled-components'
import { Logo } from '../../../components/logo/Logo.tsx'
import { Menu } from '../../../components/menu/Menu.tsx'
import { Container } from '../../../components/common/Container.ts'
import { Hamburger } from '../../../components/hamburger/Hamburger.tsx'
import { theme } from '../../../styles/Theme.ts'
import { MobileMenu } from '../mobileMenu/mobileMenu.tsx'
import { useDispatch, useSelector } from 'react-redux'
import { selectMedia768State, setMedia768State } from '../../../redux/slices/mediaQuerySlice.tsx'
import { useEffect } from 'react'
import { selectHamburgerState, setHamburgerState } from '../../../redux/slices/hamburgerSlice.tsx'

export const HeaderMenu = () => {
  const dispatch = useDispatch()
  const media768State = useSelector(selectMedia768State)
  const hamburgerState = useSelector(selectHamburgerState)
  useEffect(() => {
    const mobileMediaQuery = window.matchMedia('(max-width: 768px)')
    function handleMobileChange(event) {
      if (event.matches) {
        dispatch(setMedia768State(true))
        dispatch(setHamburgerState(false))
      } else {
        dispatch(setMedia768State(false))
      }
    }
    handleMobileChange(mobileMediaQuery)
    mobileMediaQuery.addEventListener('change', handleMobileChange)
    return () => {
      mobileMediaQuery.removeEventListener('change', handleMobileChange)
    }
  }, [dispatch])
  return (
    <StyledHeader>
      $
      {hamburgerState ? (
        <MobileMenu $position={'fixed'} $left={'0'} />
      ) : (
        <MobileMenu $position={'static'} $left={'-100%'} />
      )}
      <Container>
        <NavBlockWrapper>
          <Logo />
          {!media768State ? <Menu /> : <Hamburger />}
        </NavBlockWrapper>
        {/*{media768State ?  : null}*/}
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
  @media (max-width: 992px) {
    justify-content: space-evenly;
    padding: 20px 8px 20px 8px;
  }
  @media ${theme.media.tablet} {
    justify-content: start;
  }
`

const StyledHeader = styled.header`
  position: fixed;
  width: 100%;
  left: 0;
  top: 0;
  background: rgba(24, 24, 36, 0.8);
  z-index: 20;
  ${Container} {
    position: relative;
  }
`
