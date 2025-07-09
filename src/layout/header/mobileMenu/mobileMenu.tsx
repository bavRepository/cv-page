import { theme } from '../../../styles/Theme.ts'
import styled from 'styled-components'
import { elementsData } from '../../../data/ElementsData.tsx'
import { getLinksElementsFromDataList } from '../../../data/ModifyElementsData.tsx'
import { animationNeon, animationScaleIn, transformTranslateY } from '../../../components/animation/Animation.tsx'
import { ButtonLink } from '../../../components/common/Button.ts'
import type { ReactNode } from 'react'

type Props = {
  $position?: string
  $left?: string
}

export const MobileMenu = ({ $position, $left }: Props) => {
  const { menuItemsDataNoId } = elementsData()
  const menuElementsHtml: ReactNode[] = getLinksElementsFromDataList(menuItemsDataNoId)

  return (
    <MobileMenuPopup $position={$position} $left={$left}>
      <ul>{menuElementsHtml}</ul>
    </MobileMenuPopup>
  )
}

const MobileMenuPopup = styled.nav<{ $position?: string; $left?: string }>`
  position: ${(props) => props.$position || 'static'};
  display: block;
    z-index: 555;
  ul {
    min-width: 220px;
    transition: all 0.5s ease-out;
    background-color: rgba(0, 0, 0, 0.8);
    min-height: 100vh;
    padding: 30px 10px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: ${(props) => props.$left || '-100%'};
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
        outline: 4px ridge rgba(170, 50, 220, 0.6);
        border-radius: 2rem;
        &:hover {
            text-shadow: none;
            ${animationScaleIn};
            color: ${theme.colors.mainColor};
        }
    }
  }
`
