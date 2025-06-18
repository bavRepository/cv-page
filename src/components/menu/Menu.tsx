import styled from 'styled-components'
import { addIdToElem } from '../../utils/elemDataFix.tsx'
import type { ReactNode } from 'react'

export const Menu = () => {
  type MenuItemRender = { id?: string; href: string; color: string; name: string }

  const menuItemsDataNoId: MenuItemRender[] = [
    {
      href: '',
      color: '#7562E0',
      name: 'Home',
    },
    {
      href: '',
      color: '',
      name: 'About me',
    },
    {
      href: '',
      color: '',
      name: 'Projects',
    },
    {
      href: '',
      color: '',
      name: 'Contact',
    },
  ]

  const renderItem: (arr: MenuItemRender[]) => ReactNode[] = (arr: MenuItemRender[]): ReactNode[] => {
    return arr.map(({ id, href, color, name }: MenuItemRender, index: number) => {
      return (
        <li key={id}>
          <ListItem href={href} $inputColor={index === 0 ? color : ''}>
            {name}
          </ListItem>
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
const StyledMenu = styled.nav`
  ul {
    margin: 0;
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    list-style: none;
    padding-left: 0;
    justify-content: center;
  }
`
const ListItem = styled.a.attrs(({ href }) => ({
  href: href || '#',
}))<{ $inputColor?: string }>`
  color: ${(props) => props.$inputColor ?? 'white'};
  text-decoration: none;
  display: block;
  padding: 10px 15px;
  font-family: 'Poppins';
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  &:hover {
    color: #7562e0;
  }
`
