import { theme } from '../../../styles/Theme.ts'
import styled, { css } from 'styled-components'
import { elementsData } from '../../../data/ElementsData.tsx'
import { ModifyElementsData } from '../../../data/ModifyElementsData.tsx'
import { animationNeon, animationScaleIn, transformTranslateY } from '../../../components/animation/Animation.tsx'
import { ButtonLink } from '../../../components/common/Button.ts'
import { type ReactNode } from 'react'
import { useSelector } from 'react-redux'
import { selectHamburgerState } from '../../../redux/slices/hamburgerSlice.tsx'
import * as React from 'react'

interface MyComponentProps {
  isOpen: boolean
}

export const MobileMenu: React.FC<MyComponentProps> = ({ isOpen }) => {
  const modifyElementsData = ModifyElementsData()
  const activeHamburger = useSelector(selectHamburgerState)

  const { menuItemsDataNoId } = elementsData()
  const menuElementsHtml: ReactNode[] = modifyElementsData.getLinksElementsFromDataList(menuItemsDataNoId)

  return (
    <MobileMenuPopup $isOpen={isOpen} aria-hidden={activeHamburger}>
      <ul>{menuElementsHtml}</ul>
    </MobileMenuPopup>
  )
}

const MobileMenuPopup = styled.nav<{ $isOpen: boolean }>`
  ul {
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
    ${(props: { $isOpen: boolean }) =>
      props.$isOpen &&
      css<{ $isOpen: boolean }>`
        position: fixed;
        left: 0;
      `}

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
    outline: 4px ridge rgba(170, 50, 220, 0.6);
    border-radius: 2rem;
    &:hover {
      text-shadow: none;
      ${animationScaleIn};
      color: ${theme.colors.mainColor};
    }
  }
`
