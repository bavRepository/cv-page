import { getRandomValue, getRndIdValue } from './MathWork.tsx'
import { Span } from '../components/common/Span.ts'
import type { ReactNode } from 'react'
import { ButtonLink } from '../components/common/Button.ts'
import type { MenuItemRender } from '../components/menu/Menu.tsx'

const getAnimatedSpan = (name: string, min: number, max: number) => {
  const getRandomIndex: number = Math.floor(Math.random() * name.length)
  const getRandomTimingValue = getRandomValue(min, max).toString() + 's'
  const animatedChar = <Span $duration={getRandomTimingValue}>{name[getRandomIndex]}</Span>

  const symbolBeforeAnimatedSpan = <Span>{name.slice(0, getRandomIndex)}</Span>
  const symbolAfterAnimatedSpan = <Span>{name.slice(getRandomIndex + 1)}</Span>
  return {
    symbolBeforeAnimatedSpan,
    animatedChar,
    symbolAfterAnimatedSpan,
  }
}

const getHtmlElementsFromDataList: (elements: MenuItemRender[]) => ReactNode[] = (elements) => {
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
        const { symbolBeforeAnimatedSpan, animatedChar, symbolAfterAnimatedSpan } = getAnimatedSpan($name, 1, 7)
        return (
          <li key={$id} role={'menuItem'}>
            <ButtonLink {...elemDataObj}>
              {symbolBeforeAnimatedSpan}
              {animatedChar}
              {symbolAfterAnimatedSpan}
            </ButtonLink>
          </li>
        )
      } catch (error) {
        console.log(error)
      }
    })
  }

  const menuItemsDataWithId: MenuItemRender[] = addIdToElem(elements)
  // const menuElementsHtml: ReactNode[] = renderItem(menuItemsDataWithId)
  return renderItem(menuItemsDataWithId)
}

export { getAnimatedSpan, getHtmlElementsFromDataList }
