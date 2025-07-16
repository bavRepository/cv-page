import styled, { css } from 'styled-components'
import type { ReactNode } from 'react'
import { animationScaleIn, animationNeon, transformTranslateY } from '../animation/Animation.tsx'
import { ButtonLink } from '../common/Button.ts'
import { theme } from '../../styles/Theme.ts'
import { ModifyElementsData } from '../../data/ModifyElementsData.tsx'
import { elementsData } from '../../data/ElementsData.tsx'
import { selectHamburgerState } from '../../redux/slices/hamburgerSlice.tsx'
import { selectmediaTabletState } from '../../redux/slices/mediaQuerySlice.tsx'
import { useSelector } from 'react-redux'

export const Menu = () => {
  const hamburgerState = useSelector(selectHamburgerState)
  const mediaTabletState = useSelector(selectmediaTabletState)
  const modifyOfferElementsData = ModifyElementsData()
  const { menuItemsDataNoId } = elementsData()
  const menuElementsHtml: ReactNode[] = modifyOfferElementsData.getLinksElementsFromDataList(menuItemsDataNoId)

  return (
    <StyledMenu $isMobileMenuOpen={hamburgerState} $isTablet={mediaTabletState}>
      <ul aria-label={'Navigation menu'} role={'menu'}>
        {menuElementsHtml}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav<{ $isTablet?: boolean; $isMobileMenuOpen?: boolean }>`
  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 50px;
    list-style: none;
    padding-left: 50px;
    justify-content: flex-start;
    li {
      border-radius: 2rem;
      transition: all 0.2s ease-in-out;
      box-shadow:
        2px 2px 26px rgba(255, 255, 255, 0.2),
        -2px -2px 26px rgba(255, 255, 255, 0.2);
      &:active {
        ${transformTranslateY('5px')};
      }
    }
    ${(props: { $isTablet?: boolean }) =>
      props.$isTablet &&
      css<{ $isTablet?: boolean }>`
        width: 220px;
        background-color: rgba(0, 0, 0, 0.8);
        min-height: 100vh;
        padding: 30px 10px;
        display: flex;
        flex-direction: column;
        gap: 30px;
        justify-content: center;
        align-items: center;
        position: absolute;

        transition: all 0.3s ease-out;
        z-index: 555;
        top: 0;
        left: -100%;
      `}

    ${(props: { $isMobileMenuOpen?: boolean }) =>
      props.$isMobileMenuOpen &&
      css<{ $isMobileMenuOpen?: boolean }>`
        position: fixed;
        left: 0;
      `}
  }
  ${ButtonLink} {
    background: rgba(24, 24, 36, 1);
    color: #fff;
    text-decoration: none;
    transition: all 0.2s ease-in-out;
    display: block;
    padding: 5px 15px;
    font-weight: 600;
    font-size: 18px;
    line-height: 27px;
    user-select: none;
    text-shadow:
      0 -40px 100px,
      0 0 2px,
      0 0 1em #bfe2ff,
      0 0 0.5em #bfe2ff,
      0 0 0.1em #bfe2ff;
    ${animationNeon};
    outline: 8px ridge rgba(170, 50, 220, 0.6);
    border-radius: 2rem;
    &:hover {
      text-shadow: none;
      ${animationScaleIn};
      color: ${theme.colors.mainColor};
    }
  }
  @media ${theme.media.tabletLarge} {
    ul {
      padding-left: 0;
    }
  }
`
