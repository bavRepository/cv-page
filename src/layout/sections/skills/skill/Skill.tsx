import { Icon } from '../../../../components/icon/Icon.tsx'
import styled from 'styled-components'
type ItemListType = {
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
}
export const Skill = (props: ItemListType) => {
  return (
    <SkillWrapper>
      <Icon {...props}></Icon>
      <DescriptionWrapper>
        <h3>
          UI & UX
          <br />
          DESIGNING
        </h3>
      </DescriptionWrapper>
    </SkillWrapper>
  )
}

const SkillWrapper = styled.div`
  box-sizing: border-box;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.2);
  max-width: 256px;
  max-height: 254px;
  background: #bdbdbd;
  padding: 97px 24px 24px 24px;
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
