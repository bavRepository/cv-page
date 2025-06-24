import styled from 'styled-components'
import { ButtonLink } from '../../../../components/common/Button.ts'
import { SectionTitle } from '../../../../components/common/SectionTitle.ts'
import { Text } from '../../../../components/common/Text'
import { FlexWrapper } from '../../../../components/common/FlexWrapper.ts'

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
        $color={'#7562e0'}
      >
        {$title}
      </SectionTitle>

      <Text $fontSize={'18px'} $textAlign={'left'} $margin={'8px 0 0 0'}>
        {$text}
      </Text>
      <FlexWrapper $justify={'center'} $align={'center'} $gap={'12px'}>
        <ButtonLink target="_blank" $width={'135px'} $height={'38px'} $href={$viewLive} $fontSize={'16px'}>
          View live
        </ButtonLink>
        <ButtonLink target="_blank" $width={'135px'} $height={'38px'} $href={$gitHubRepo} $fontSize={'16px'}>
          GitHub Repo
        </ButtonLink>
      </FlexWrapper>
    </ProjectWrapper>
  )
}

const Img = styled.img`
  width: 100%;
  max-height: 173px;
  object-fit: cover;
`

const ProjectWrapper = styled.div`
  box-shadow: 0 4px 4px 0 rgba(0, 0, 0, 0.25);
  background: #31313f;
  max-width: 100%;
  min-height: 100%;
  border-radius: 8px;
  padding: 16px 16px 23px 16px;
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
    ${ButtonLink} {
      border-radius: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 2px solid #7562e0;
      transition: all 0.2s;
      &:hover {
        background: #7562e0;
      }
    }
  }
  ${Text} {
    min-height: 81px;
  }
`
