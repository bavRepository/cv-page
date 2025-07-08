import styled from 'styled-components'
import type { ReactNode } from 'react'
import { animationScaleIn, animationNeon, transformTranslateY } from '../animation/Animation.tsx'
import { ButtonLink } from '../common/Button.ts'
import { theme } from '../../styles/Theme.ts'
import { getLinksElementsFromDataList } from '../../Data/ModifyElementsData.tsx'
import { elementsData } from '../../Data/ElementsData.tsx'

export const Menu = () => {
  const { menuItemsDataNoId } = elementsData()
  const menuElementsHtml: ReactNode[] = getLinksElementsFromDataList(menuItemsDataNoId)

  return (
    <StyledMenu>
      <ul aria-label={'Скажи'} role={'menu'}>
        {menuElementsHtml}
      </ul>
    </StyledMenu>
  )
}

const StyledMenu = styled.nav`
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
      transition: all 0.2s;
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
