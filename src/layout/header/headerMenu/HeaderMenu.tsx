import styled from 'styled-components'
import { Logo } from '../../../components/logo/Logo.tsx'
import { Menu } from '../../../components/menu/Menu.tsx'
import { Container } from '../../../components/common/Container.ts'
import { Hamburger } from '../../../components/hamburger/Hamburger.tsx'
import { theme } from '../../../styles/Theme.ts'
import { useDispatch, useSelector } from 'react-redux'
import { selectmediaTabletState, setMediaTabletState } from '../../../redux/slices/mediaQuerySlice.tsx'
import React, { useEffect } from 'react'
import { setHamburgerState } from '../../../redux/slices/hamburgerSlice.tsx'

export const HeaderMenu: React.FC = () => {
  const dispatch = useDispatch()
  const mediaTabletState = useSelector(selectmediaTabletState)
  useEffect(() => {
    const mobileMediaQuery: MediaQueryList = window.matchMedia('(max-width: 768px)')
    function handleMobileChange(event: MediaQueryList | MediaQueryListEvent) {
      if (event.matches) {
        dispatch(setMediaTabletState(true))
      } else {
        dispatch(setMediaTabletState(false))
        dispatch(setHamburgerState(false))
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
      <Container>
        <NavBlockWrapper>
          <Logo />
          {mediaTabletState && <Hamburger />}
          <Menu />
        </NavBlockWrapper>
      </Container>
    </StyledHeader>
  )
}

const NavBlockWrapper = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 20px 20px;
  gap: 30px;
  flex-wrap: wrap;
  @media ${theme.media.tabletLarge} {
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
  background: rgba(24, 24, 36, 0.9);
  z-index: 20;
  ${Container} {
    position: relative;
  }
`
