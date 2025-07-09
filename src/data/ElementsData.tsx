type ButtonItemRender = {
  $id?: string
  $name?: string
  $draggable?: boolean
  $textDecoration?: string
  $href?: string
}

const btnListNoId: ButtonItemRender[] = [
  {
    $name: 'About me',
    $href: '#aboutme',
  },
  {
    $name: 'Projects',
    $href: '#projects',
  },
]

type menuItemsDataNoIdType = {
  $id?: string
  $href?: string
  $color?: string
  $name: string
  draggable?: boolean
  $animation?: string
}
const menuItemsDataNoId: menuItemsDataNoIdType[] = [
  {
    $href: '#',
    $name: 'Home',
  },
  {
    $href: '#aboutme',
    $name: 'About me',
  },
  {
    $href: '#projects',
    $name: 'Projects',
  },
  {
    $href: '#contacts',
    $name: 'Contact',
  },
]

type ItemListTypeOffer = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $header?: string
  $text?: string
  $id?: string
}
const offerList: ItemListTypeOffer[] = [
  {
    $iconId: 'rulerPan',
    $width: '56',
    $height: '56',
    $viewBox: '0 0 40 40',
    $header: 'UI & UX DESIGNING',
    $text: 'I design beautiful web iterfaces with Figma and Adove XD',
  },
  {
    $iconId: 'code',
    $width: '57',
    $height: '57',
    $viewBox: '0 0 50 50',
    $header: 'WEB DEVELOPMENT',
    $text:
      'I create beautiful iterfaces with simple HTML, CSS, & JavaScript and also frameworks like Angular and ReactJS',
  },
  {
    $iconId: 'android',
    $width: '60',
    $height: '60',
    $viewBox: '0 0 55 60',
    $header: 'MOBILE DEVELOPMENT',
    $text: 'I am an expert mobile developer. I have experience using Flutter and React Native.',
  },
  {
    $iconId: 'git',
    $width: '62',
    $height: '62',
    $viewBox: '0 0 62 62',
    $header: 'VERSION CONTROL',
    $text: 'I can use version control systems well, and Git & Mecurial are my go-to tool.',
  },
  {
    $iconId: 'js',
    $width: '54',
    $height: '54',
    $viewBox: '0 0 54 54',
    $header: 'NPM AND NODEJS',
    $text: 'I have core understanding of NPM. I can also develop general purpose applications with NodeJS',
  },
  {
    $iconId: 'webScrapping',
    $width: '48',
    $height: '48',
    $viewBox: '0 0 48 48',
    $header: 'WEB SCRAPING',
    $text: 'I can collect content and data from the internet then manipulate and analyze as needed.',
  },
]

export type ItemListTypeProject = {
  $id?: string
  $img: string
  $alt?: string
  $title?: string
  $text?: string
  $viewLive?: string
  $gitHubRepo?: string
}

const projectList: ItemListTypeProject[] = [
  {
    $img: './uber.jpeg',
    $alt: 'uber',
    $title: 'UBER',
    $text: 'The website of the uber service where you can get acquainted with all the features of this company',
    $viewLive: 'https://bavrepository.github.io/Projects/UberNew/src/',
    $gitHubRepo: 'https://github.com/bavRepository/bavRepository.github.io/tree/main/Projects/UberNew/src',
  },
  {
    $img: './fit.jpg',
    $alt: 'fit',
    $title: 'HEALTHY EATING',
    $text: 'Healthy eating site that also has a calorie calculator',
    $viewLive: 'https://bavrepository.github.io/Projects/Fit/src/',
    $gitHubRepo: 'https://github.com/bavRepository/bavRepository.github.io/tree/main/Projects/Fit/src',
  },
  {
    $img: './pulse.jpeg',
    $alt: 'pulse',
    $title: 'PULSOMETER',
    $text: 'Website presentation and sale of products heart rate monitor',
    $viewLive: 'https://bavrepository.github.io/Projects/PulsometerNew/src/',
    $gitHubRepo: 'https://github.com/bavRepository/bavRepository.github.io/tree/main/Projects/PulsometerNew/src',
  },
]

export type ItemListTypeSkill = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $text?: string
  $id?: string
}
const skillList: ItemListTypeSkill[] = [
  {
    $iconId: 'rulerPan',
    $width: '42',
    $height: '42',
    $viewBox: '0 0 42 42',
    $text: 'UI & UX\n' + 'DESIGNING',
  },
  {
    $iconId: 'code',
    $width: '52',
    $height: '52',
    $viewBox: '0 0 52 52',
    $text: 'WEB\n' + 'DEVELOPMENT',
  },
  {
    $iconId: 'android',
    $width: '62',
    $height: '62',
    $viewBox: '0 0 62 62',
    $text: 'MOBILE\n' + 'DEVELOPMENT',
  },
  {
    $iconId: 'python',
    $width: '55',
    $height: '55',
    $viewBox: '0 0 55 55',
    $text: 'WEB SCRAPING\n' + 'WITH PYTHON',
  },
]

const elementsData = () => {
  return { menuItemsDataNoId, offerList, btnListNoId, projectList, skillList }
}

export { elementsData }
