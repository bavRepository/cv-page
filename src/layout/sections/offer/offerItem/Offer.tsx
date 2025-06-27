import { Icon } from '../../../../components/icon/Icon.tsx'
import styled from 'styled-components'
import { Text } from '../../../../components/common/Text.ts'
import { theme } from '../../../../styles/Theme.ts'
type ItemListType = {
  $keyId?: string
  $iconId: string
  $width?: string
  $height?: string
  $viewBox?: string
  $header?: string
  $text?: string
}
export const Offer = ({ $text, $header, ...props }: ItemListType) => {
  return (
    <OfferWrapper>
      <Icon {...props} />
      <DescriptionWrapper>
        <HeaderOfferItem>{$header}</HeaderOfferItem>
        <Text>{$text}</Text>
      </DescriptionWrapper>
    </OfferWrapper>
  )
}

const DescriptionWrapper = styled.div`
  margin-top: 14px;
`

const HeaderOfferItem = styled.h3`
  font-size: 24px;
  color: #fff;
  line-height: 32px;
  margin: 0;
  text-align: center;
`

const OfferWrapper = styled.div`
  margin-top: 24px;
  box-shadow: 5px 5px 35px rgba(117, 98, 224, 0.3);
  max-width: 324px;
  height: 338px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  border: 3px solid ${theme.colors.mainColor};
  padding: 10px 22px 0 22px;
  flex-grow: 1;
  transition: all 0.3s;
  &:hover {
    background: ${theme.colors.mainColor};
    cursor: pointer;
    transform: scale(0.97);
  }
  ${Text} {
    margin-top: 16px;
    min-height: 108px;
  }
  &:nth-child(2n) {
    border: 3px solid #f5f5f5;
    h3 {
      color: ${theme.colors.mainColor};
    }
  }
  &:hover {
    border: 3px solid #f5f5f5;
    h3 {
      color: #fff;
    }
  }
  ${HeaderOfferItem} {
    font-size: 22px;
    line-height: 30px;
  }
`
