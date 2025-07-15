import styled from 'styled-components'
import { SectionTitle } from '../../../../components/common/SectionTitle.ts'
import { Text } from '../../../../components/common/Text'
import { FlexWrapper } from '../../../../components/common/FlexWrapper.ts'
import { theme } from '../../../../styles/Theme.ts'

type ItemListType = {
  $id?: string
  $img: string
  $alt?: string
  $title?: string
  $text?: string
  $viewLive?: string
  $gitHubRepo?: string
}

export const Project = ({ $text, $img, $alt, $title, $viewLive, $gitHubRepo }: ItemListType) => {
  return (
    <ProjectWrapper>
      <Img src={$img} alt={$alt} />
      <SectionTitle
        $textAlign={'left'}
        $lineHeight={'32px'}
        $fontSize={'24px'}
        $margin={'16px 0 0 0'}
        $color={`${theme.colors.mainColor}`}
      >
        {$title}
      </SectionTitle>

      <Text $fontSize={'18px'} $textAlign={'left'} $margin={'8px 0 0 0'}>
        {$text}
      </Text>
      <FlexWrapper $justify={'center'} $align={'center'} $gap={'12px'}>
        <Link target="_blank" href={$viewLive}>
          View live
        </Link>
        <Link target="_blank" href={$gitHubRepo}>
          GitHub Repo
        </Link>
      </FlexWrapper>
    </ProjectWrapper>
  )
}

const Img = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
`
const Link = styled.a``

const ProjectWrapper = styled.article`
  box-shadow: 4px 4px 14px 0 rgba(0, 0, 0, 0.25);
  background: #31313f;
  max-width: 343px;
  border-radius: 8px;
  //padding: 16px 16px 23px 16px;
  padding: 20px 20px 23px 20px;
  flex-grow: 1;
  transition: all 0.3s;
  &:hover {
    cursor: pointer;
    transform: scale(0.97);
  }
  h3 {
    font-size: 24px;
    color: #fff;
    line-height: 32px;
    text-align: left;
    margin: 0;
  }
  ${FlexWrapper} {
    margin-top: 24px;
    ${Link} {
      font-size: 16px;
      height: 38px;
      width: 135px;
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid ${theme.colors.mainColor};
      transition: all 0.2s;
      &:hover {
        background: ${theme.colors.mainColor};
      }
    }
  }
  ${Text} {
    min-height: 81px;
  }
  @media (max-width: 1200px) {
    ${Text} {
      min-height: 88px;
      font-size: 17px;
    }
  }

  @media ${theme.media.tabletLarge} {
    max-width: 450px;
    Img {
      min-height: 250px;
    }

    ${Text} {
      min-height: 81px;
    }
  }
`
