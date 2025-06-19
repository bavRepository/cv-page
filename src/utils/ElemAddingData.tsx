import { v4 as uuidv4 } from 'uuid'

type MenuItemRender = {
  $id?: string
  href?: string
  $color?: string
  $name: string
  draggable?: boolean
  $animation?: string
}

export const addIdToElem: (elements: MenuItemRender[]) => MenuItemRender[] = (
  elements: MenuItemRender[],
): MenuItemRender[] => {
  return elements.map((elem: MenuItemRender): MenuItemRender => {
    return { ...elem, $id: uuidv4() }
  })
}
