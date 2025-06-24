import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Text } from '../../../components/common/Text.ts'
import { Social } from '../../../components/social/Social.tsx'
import { Button, ButtonLink } from '../../../components/common/Button.ts'
import { Container } from '../../../components/common/Container.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import { animationScaleIn } from '../../../components/animation/Animation.tsx'

export const Contacts = () => {
  return (
    <SectionContacts>
      <Container>
        <ContactsGridWrapper>
          <LeftContentWrapper>
            <SectionTitle $fontSize={'32px'} $color={'#7562e0'} $textAlign={'left'}>
              Connect with me:
            </SectionTitle>
            <Text $textAlign={'left'}>Any convenient way for you</Text>
            <Social margin={'16px 0 0 0'} justify={'left'} />
          </LeftContentWrapper>
          <RightContentWrapper>
            <SectionTitle $fontWeight={500} $fontSize={'24px'} $color={'#fff'} $textAlign={'left'} $lineHeight={'40px'}>
              Contact me, let’s make magic together
            </SectionTitle>
            <ContactForm>
              <input type="text" placeholder={'Name:'} name={'name'} />
              <input type="email" placeholder={'Email:'} name={'email'} />
              <textarea placeholder={'Message:'} name={'message'} />
              <Button $type={'submit'} $width={'174px'} $height={'50px'} $fontSize={'16px'} $fontWeight={500}>
                Send
              </Button>
              <FlexWrapper>
                <input type="checkbox" />
                <Text>&nbsp; I have read and agree to the&nbsp;</Text>
                <ButtonLink>Privacy Policy</ButtonLink>
              </FlexWrapper>
            </ContactForm>
          </RightContentWrapper>
        </ContactsGridWrapper>
      </Container>
    </SectionContacts>
  )
}

const SectionContacts = styled.div`
  padding-top: 128px;
  background: #1a1a29;
`
const ContactsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  grid-template-rows: minmax(380px, auto);
  justify-items: center;
  gap: 23px;
`
const ContactForm = styled.form`
  margin-top: 24px;
  max-width: 472px;
  display: flex;
  flex-direction: column;
  gap: 18px;
  input,
  textarea {
    border-radius: 8px;
    background: rgba(245, 245, 245, 0.11);
    padding: 12px 24px;
    color: #fff;
    border: none;
  }
  textarea {
    height: 80px;
    resize: none;
  }
  ${Button} {
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 8px;
    border: 2px solid #7562e0;
    transition: all 0.2s;
    &:hover {
      background: #7562e0;
    }
  }
`
const LeftContentWrapper = styled.div`
  ${Text} {
    margin-top: 16px;
  }
`
const RightContentWrapper = styled.div`
  ${FlexWrapper} {
    color: rgba(255, 255, 255, 0.8);
    input[type='checkbox'] {
      transform: scale(1.2);
    }

    ${ButtonLink} {
      display: block;
      box-shadow: 5px 5px 35px rgba(117, 98, 224, 0.3) inset;
      padding: 4px 4px;
      border-radius: 4px;
      background-color: transparent;
      color: #7562e0;
      transition: all 0.3s;
      &:hover {
        transform: scale(1.2) translateX(10%) translateY(-10%);
        cursor: pointer;
        color: rgba(255, 255, 255, 0.8);
      }
    }
  }
`
