import styled from 'styled-components'
import { addIdToElem } from '../../utils/ElemAddingData.tsx'
import type { ReactNode } from 'react'
import { animationScaleInMixin, animationNeonMixin, animationBlinkMixin } from '../mixins/Mixins.tsx'
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
      $animation: 'neon',
    },
    {
      href: '',
      $color: '',
      $name: 'Projects',
      draggable: false,
      $animation: 'neon',
    },
    {
      href: '',
      $color: '',
      $name: 'Contact',
      draggable: false,
      $animation: 'neon',
    },
  ]

  const renderItem: (arr: MenuItemRender[]) => ReactNode[] = (arr: MenuItemRender[]): ReactNode[] => {
    return arr.map(({ $name, $id, ...elemDataObj }: MenuItemRender) => {
      try {
        if (!$name) {
          throw new Error('$name has no length')
        }
        const getRandomIndex: number = Math.floor(Math.random() * $name.length)
        const tmpChar = `<span>${$name[getRandomIndex]}</span>`
        const $modifiedName = `${$name.slice(0, getRandomIndex)}${tmpChar}${$name.slice(getRandomIndex + 1)}`
        return (
          <li key={$id}>
            <ListItem {...elemDataObj} dangerouslySetInnerHTML={{ __html: $modifiedName }}></ListItem>
          </li>
        )
      } catch (error) {
        console.log(error)
      }
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

const textShadow = '0 -40px 100px,0 0 2px,0 0 1em #bfe2ff,0 0 0.5em #bfe2ff,0 0 0.1em #bfe2ff;'

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
        ${animationScaleInMixin}
      }
    }
  }
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

  text-shadow: ${(props) => (props.$color === '' ? textShadow : 'none')};
  ${(props) => {
    switch (props.$animation) {
      case 'neon':
        return animationNeonMixin
      default:
        return 'none'
    }
  }};

  &:hover {
    color: #7562e0;
    text-shadow: none;
    animation-name: none;
  }

  span {
    ${animationBlinkMixin}
  }
`
