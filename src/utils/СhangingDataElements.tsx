import { v4 as uuidv4 } from 'uuid'

type MenuItemRender = {
  $id?: string
  href?: string
  $color?: string
  $name: string
  draggable?: boolean
  $animation?: string
}

const addIdToElem: (elements: MenuItemRender[]) => MenuItemRender[] = (
  elements: MenuItemRender[],
): MenuItemRender[] => {
  return elements.map((elem: MenuItemRender): MenuItemRender => {
    return { ...elem, $id: uuidv4() }
  })
}

const getModifyStrWithRandomSpan = (str: string) => {
  const getRandomIndex: number = Math.floor(Math.random() * str.length)
  const tmpChar = `<span>${str[getRandomIndex]}</span>`
  return `${str.slice(0, getRandomIndex)}${tmpChar}${str.slice(getRandomIndex + 1)}`
}

export { addIdToElem, getModifyStrWithRandomSpan }
