import styled from 'styled-components'
import { addIdToElem } from '../../utils/ElemAddingData.tsx'
import type { ReactNode } from 'react'
import { keyframes } from 'styled-components'

const textShadowAnimation = '0 -40px 100px,0 0 2px,0 0 1em #bfe2ff,0 0 0.5em #bfe2ff,0 0 0.1em #bfe2ff;'
export const Menu = () => {
  type MenuItemRender = {
    $id?: string
    href?: string
    $color?: string
    $name: string
    draggable?: boolean
    $animation?: string
  }
  const menuItemsDataNoId: MenuItemRender[] = [
    {
      href: '',
      $color: '#7562E0',
      $name: 'Home',
      draggable: false,
      $animation: 'none',
    },
    {
      href: '',
      $color: '',
      $name: 'About me',
      draggable: false,
      $animation: 'flicker',
    },
    {
      href: '',
      $color: '',
      $name: 'Projects',
      draggable: false,
      $animation: 'flicker',
    },
    {
      href: '',
      $color: '',
      $name: 'Contact',
      draggable: false,
      $animation: 'flicker',
    },
  ]

  const renderItem: (arr: MenuItemRender[]) => ReactNode[] = (arr: MenuItemRender[]): ReactNode[] => {
    return arr.map(({ $name, $id, ...elemDataObj }: MenuItemRender) => {
      const getRandomIndex: number = Math.floor(Math.random() * $name.length)
      const tmpChar = `<span>${$name[getRandomIndex]}</span>`
      const $modifiedName = `${$name.slice(0, getRandomIndex)}${tmpChar}${$name.slice(getRandomIndex + 1)}`
      return (
        <li key={$id}>
          <ListItem {...elemDataObj} dangerouslySetInnerHTML={{ __html: $modifiedName }}></ListItem>
        </li>
      )
    })
  }

  const menuItemsDataWithId: MenuItemRender[] = addIdToElem(menuItemsDataNoId)
  const menuElementsHtml: ReactNode[] = renderItem(menuItemsDataWithId)

  return (
    <StyledMenu>
      <ul>{menuElementsHtml}</ul>
    </StyledMenu>
  )
}
const scaleIn = keyframes`
     0% { transform: scale(1); }
  15% { transform: scale(0.93);}
  100% { transform: scale(1); }
`

const StyledMenu = styled.nav`
  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    list-style: none;
    padding-left: 0;
    justify-content: center;
    li {
      box-shadow:
        2px 2px 26px rgba(255, 255, 255, 0.2),
        -2px -2px 26px rgba(255, 255, 255, 0.2);
      outline: 8px ridge rgba(170, 50, 220, 0.6);
      border-radius: 2rem;
      &:hover {
        animation: ${scaleIn} 1.2s ease-out;
      }
    }
  }
`

const flicker = keyframes`
  from {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.92), 0 0 30px rgba(202, 228, 225, 0.34), 0 0 12px rgba(191, 226, 255, 0.52), 0 0 21px rgba(191, 226, 255, 0.92), 0 0 34px rgba(191, 226, 255, 0.78), 0 0 54px rgba(191, 226, 255, 0.92);
  }
  to {
    text-shadow: 0 0 6px rgba(202, 228, 225, 0.98), 0 0 30px rgba(202, 228, 225, 0.42), 0 0 12px rgba(191, 226, 255, 0.58), 0 0 22px rgba(191, 226, 255, 0.84), 0 0 38px rgba(191, 226, 255, 0.88), 0 0 60px #FFF;
  }
`

const blink = keyframes`
  78% {color: inherit;text-shadow: inherit;}
  79%{color: #0b3960;}
  80% {text-shadow: none;}
  81% {color: inherit;text-shadow: inherit;}
  82% {color: #0b3960;text-shadow: none;}
  83% {color: inherit;text-shadow: inherit;}
  92% {color: #0b3960;text-shadow: none;}
  92.5% {color: inherit;text-shadow: inherit;}
`

type MenuItemWrapperProps = {
  $animation?: string
  $color?: string
}

const ListItem = styled.a.attrs(({ href, draggable }) => ({
  href: href || '#',
  draggable: draggable || 'false',
}))<MenuItemWrapperProps>`
  color: ${(props) => props.$color || '#fff'};
  text-decoration: none;
  display: block;
  padding: 5px 15px;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  user-select: none;

  text-shadow: ${(props) => (props.$color === '' ? textShadowAnimation : 'none')};
  animation-name: ${(props) => {
    switch (props.$animation) {
      case 'flicker':
        return flicker
      default:
        return 'none'
    }
  }};
  animation-duration: 0.1s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  animation-direction: alternate;

  &:hover {
    color: #7562e0;
    text-shadow: none;
    animation-name: none;
  }

  span {
    animation: ${blink} linear infinite 2s;
  }
`
