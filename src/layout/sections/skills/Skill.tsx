import { Icon } from '../../../components/icon/Icon.tsx'
import styled from 'styled-components'
type ItemListType = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $text?: string
}
export const Skill = ({ $text, ...props }: ItemListType) => {
  return (
    <SkillWrapper>
      <Icon {...props} />
      <DescriptionWrapper>
        <h3>{$text}</h3>
      </DescriptionWrapper>
    </SkillWrapper>
  )
}

const SkillWrapper = styled.div`
  box-shadow: 5px 5px 35px rgba(117, 98, 224, 0.3);
  max-width: 246px;
  height: 244px;
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  background: #bdbdbd;
  padding: 0 24px 24px 24px;
  flex-grow: 1;
  transition: all 0.3s;
  &:hover {
    background: #7562e0;
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
`
const DescriptionWrapper = styled.div`
  margin-top: 14px;
`
