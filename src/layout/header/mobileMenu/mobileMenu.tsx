import React, { type ReactNode } from 'react'
import { theme } from '../../../styles/Theme.ts'
import styled from 'styled-components'
import { menuItemsDataNoId } from '../../../components/menu/Menu.tsx'
import { getHtmlElementsFromDataList } from '../../../utils/ModifyElementsData.tsx'

export const MobileMenu = ({ $position, $left }) => {
  const menuElementsHtml: ReactNode[] = getHtmlElementsFromDataList(menuItemsDataNoId)

  return (
    <MobileMenuPopup $position={$position ?? ''} $left={$left ?? ''}>
      <ul>{menuElementsHtml}</ul>
    </MobileMenuPopup>
  )
}

const MobileMenuPopup = styled.nav<{ $position?: string; $left?: string }>`
  position: ${(props) => props.$position || 'static'};
  ul {
    transition: all 0.5s ease-out;
    width: 50%;
    background-color: rgba(0, 0, 0, 0.8);
    height: 100vh;
    padding: 8px 8px;
    display: flex;
    flex-direction: column;
    gap: 12px;
    justify-content: center;
    position: absolute;
    top: 0;
    left: ${(props) => props.$left || '-100%'};
  }
`
