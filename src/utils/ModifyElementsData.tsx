import { getRandomValue, getRndIdValue } from './MathWork.tsx'
import { Span } from '../components/common/Span.ts'
import type { ReactNode } from 'react'
import { ButtonLink } from '../components/common/Button.ts'
import { Offer } from '../layout/sections/offer/offerItem/Offer.tsx'

type ButtonItemRender = {
  $id?: string
  $name?: string
  $draggable?: boolean
  $textDecoration?: string
}

type menuItemsDataNoIdType = {
  $id?: string
  href?: string
  $color?: string
  $name: string
  draggable?: boolean
  $animation?: string
}

const addIdToElem: (
  elements: menuItemsDataNoIdType[] | ButtonItemRender[],
) => menuItemsDataNoIdType[] | ButtonItemRender[] = (elements) => {
  return elements.map((elem) => {
    const strId = getRndIdValue()
    return { ...elem, $id: strId }
  })
}

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

const getLinksElementsFromDataList: (elements: menuItemsDataNoIdType[] | ButtonItemRender[]) => ReactNode[] = (
  elements,
) => {
  const renderItem: (arr: menuItemsDataNoIdType[] | ButtonItemRender[]) => ReactNode[] = (
    arr: menuItemsDataNoIdType[] | ButtonItemRender[],
  ): ReactNode[] => {
    return arr.map(({ $name, $id, ...elemDataObj }: menuItemsDataNoIdType | ButtonItemRender) => {
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

  const menuItemsDataWithId: menuItemsDataNoIdType[] | ButtonItemRender[] = addIdToElem(elements)
  return renderItem(menuItemsDataWithId)
}

const getOffersElementsFromDataList = () => {
  const renderList: (arr: ItemListTypeOffer[]) => ReactNode[] = (arr: ItemListTypeOffer[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeOffer): ReactNode => {
      return <Offer key={$id} {...item} />
    })
  }
  const offerItemsDataWithId = addIdToElem(offerList)
  const offerElementsHtml: ReactNode[] = renderList(offerItemsDataWithId)
}

export { getAnimatedSpan, getLinksElementsFromDataList, getOffersElementsFromDataList }
