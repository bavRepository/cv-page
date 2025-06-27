import styled from 'styled-components'
import { getRndIdValue } from '../../utils/MathWork.tsx'
import type { ReactNode } from 'react'
import { animationScaleIn, animationNeon, animationBlink } from '../animation/Animation.tsx'
import { ButtonLink } from '../common/Button.ts'
import { theme } from '../../styles/Theme.ts'

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
    $name: 'Home',
  },
  {
    href: '',
    $name: 'About me',
  },
  {
    href: '',
    $name: 'Projects',
  },
  {
    href: '',
    $name: 'Contact',
  },
]

export const Menu = () => {
  const addIdToElem: (elements: MenuItemRender[]) => MenuItemRender[] = (elements) => {
    return elements.map((elem) => {
      const strId = getRndIdValue()
      return { ...elem, $id: strId }
    })
  }

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
          <li key={$id} role={'menuItem'}>
            <ButtonLink {...elemDataObj} dangerouslySetInnerHTML={{ __html: $modifiedName }}></ButtonLink>
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
      transition: all 0.2s;
      box-shadow:
        2px 2px 26px rgba(255, 255, 255, 0.2),
        -2px -2px 26px rgba(255, 255, 255, 0.2);
      &:hover {
        ${animationScaleIn}
      }
    }
  }
  ${ButtonLink} {
    color: #fff;
    text-decoration: none;
    transition: all 0.2s;
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
      animation-name: none;
      color: ${theme.colors.mainColor};
    }

    span {
      ${animationBlink(3.3)};
    }
  }
  @media (max-width: 991.98px) {
    ul {
      padding-left: 0;
    }
  }
  @media (max-width: 767.98px) {
    display: none;
  }
`
