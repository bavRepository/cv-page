import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Text } from '../../../components/common/Text.ts'
import { Social } from '../../../components/social/Social.tsx'
import { Button } from '../../../components/common/Button.ts'
import { Container } from '../../../components/common/Container.ts'

export const Contacts = () => {
  return (
    <SectionContacts>
      <Container>
        <ContactsGridWrapper>
          <LeftContentWrapper>
            <SectionTitle $fontSize={'32px'} $color={'#7562e0'} $textAlign={'left'}>
              Connect with me:
            </SectionTitle>
            <Text $textAlign={'left'}>Satisfied with me? Please contact me</Text>
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
              <Button $type={'submit'}></Button>
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
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: minmax(380px, auto);
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
  }
`
const LeftContentWrapper = styled.div`
  ${Text} {
    margin-top: 16px;
  }
`
const RightContentWrapper = styled.div``
