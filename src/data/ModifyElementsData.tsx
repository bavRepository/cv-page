import { getRandomValue, getRndIdValue } from '../utils/MathWork.tsx'
import { Span } from '../components/common/Span.ts'
import type { ReactNode } from 'react'
import { ButtonLink } from '../components/common/Button.ts'
import { Offer } from '../layout/sections/offer/offerItem/Offer.tsx'
import { Project } from '../layout/sections/projects/projectItem/Project.tsx'
import { Skill } from '../components/skills/skill/Skill.tsx'

type ItemListTypeOffer = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $header?: string
  $text?: string
  $id?: string
}

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

type ItemListTypeProject = {
  $id?: string
  $img: string
  $alt?: string
  $title?: string
  $text?: string
  $viewLive?: string
  $gitHubRepo?: string
}

type ItemListTypeSkill = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $text?: string
  $id?: string
}

const addIdToElem: (
  elements: menuItemsDataNoIdType[] | ButtonItemRender[] | ItemListTypeOffer[],
) => menuItemsDataNoIdType[] | ButtonItemRender[] | ItemListTypeOffer[] = (elements) => {
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

const getOffersElementsFromDataList = (offerList: ItemListTypeOffer[]): ReactNode[] => {
  const renderList: (arr: ItemListTypeOffer[]) => ReactNode[] = (arr: ItemListTypeOffer[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeOffer): ReactNode => {
      return <Offer key={$id} {...item} />
    })
  }
  const offerItemsDataWithId = addIdToElem(offerList)

  return renderList(offerItemsDataWithId)
}

const getProjectsElementsFromDataList = (projectList: ItemListTypeProject[]): ReactNode[] => {
  const renderList: (arr: ItemListTypeProject[]) => ReactNode[] = (arr: ItemListTypeProject[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeProject): ReactNode => {
      return <Project key={$id} {...item} />
    })
  }

  const peojectItemsDataWithId = addIdToElem(projectList)

  return renderList(peojectItemsDataWithId)
}

const getSkillsElementsFromDataList = (skillsList: ItemListTypeSkill[]): ReactNode[] => {
  const renderList: (arr: ItemListTypeSkill[]) => ReactNode[] = (arr: ItemListTypeSkill[]): ReactNode[] => {
    return arr.map(({ $id, ...item }: ItemListTypeSkill): ReactNode => {
      return <Skill key={$id} {...item} />
    })
  }
  const skillsItemsDataWithId = addIdToElem(skillsList)

  return renderList(skillsItemsDataWithId)
}

export {
  getAnimatedSpan,
  getLinksElementsFromDataList,
  getOffersElementsFromDataList,
  getProjectsElementsFromDataList,
  getSkillsElementsFromDataList,
}
