import styled from 'styled-components'
import { SectionTitle } from '../../../components/common/SectionTitle.ts'
import { Text } from '../../../components/common/Text.ts'
import { Social } from '../../../components/social/Social.tsx'
import { Button, ButtonLink } from '../../../components/common/Button.ts'
import { Container } from '../../../components/common/Container.ts'
import { FlexWrapper } from '../../../components/common/FlexWrapper.ts'
import { animationScaleIn } from '../../../components/animation/Animation.tsx'
import { theme } from '../../../styles/Theme.ts'
import emailjs from '@emailjs/browser'
import { type ElementRef, useRef } from 'react'
export const Contacts: React.FC = () => {
  const form = useRef<ElementRef<'form'>>(null)
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-expect-error
  const sendEmail = (e) => {
    e.preventDefault()

    if (!form.current) return

    emailjs
      .sendForm('service_49auzkd', 'template_72c5sxr', form.current, {
        publicKey: 'uuaqlJ0Pi5l6FXRGN',
      })
      .then(
        () => {
          console.log('SUCCESS!')
          e.target.reset()
        },
        (error) => {
          console.log('FAILED...', error.text)
        },
      )
  }

  return (
    <SectionContacts id="contactsSection">
      <Container>
        <ContactsGridWrapper>
          <LeftContentWrapper>
            <SectionTitle $fontSize={'32px'} $color={`${theme.colors.mainColor}`} $textAlign={'left'}>
              Connect with me:
            </SectionTitle>
            <Text $textAlign={'left'}>Any convenient way for you</Text>
            <Social color={`${theme.colors.mainColor}`} margin={'16px 0 0 0'} justify={'left'} />
          </LeftContentWrapper>
          <RightContentWrapper>
            <SectionTitle $fontWeight={500} $fontSize={'24px'} $color={'#fff'} $textAlign={'left'} $lineHeight={'40px'}>
              Contact me, let’s make magic together
            </SectionTitle>
            <ContactForm ref={form} onSubmit={sendEmail}>
              <input required type="text" placeholder={'Name:'} name={'name'} />
              <input required type="email" placeholder={'Email:'} name={'email'} />
              <input required type="text" placeholder={'Subject:'} name={'subject'} />
              <textarea required placeholder={'Message:'} name={'message'} />
              <FlexWrapper $justify={'flex-end'} $wrap={'wrap'}>
                <input type="checkbox" id={'agreement'} />
                <Text>
                  <label htmlFor={'agreement'}> &nbsp; I have read and agree to the&nbsp;</label>
                </Text>
                {/*eslint-disable-next-line @typescript-eslint/ban-ts-comment*/}
                {/*@ts-expect-error*/}
                <ButtonLink>Privacy Policy</ButtonLink>
              </FlexWrapper>
              <Button $type={'submit'} $width={'140px'} $height={'44px'} $fontSize={'16px'} $fontWeight={500}>
                Send
              </Button>
            </ContactForm>
          </RightContentWrapper>
        </ContactsGridWrapper>
      </Container>
    </SectionContacts>
  )
}

const SectionContacts = styled.section`
  position: relative;
  padding-top: 150px;
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
    align-self: flex-end;
    display: flex;
    justify-content: center;
    align-items: center;
    background: transparent;
    border-radius: 8px;
    border: 2px solid ${theme.colors.mainColor};
    transition: all 0.2s;
    &:hover {
      background: ${theme.colors.mainColor};
    }
  }
  ${FlexWrapper} {
    color: rgba(255, 255, 255, 0.8);
    input[type='checkbox'] {
      transform: scale(1.2);
    }
    ${Text} {
      color: rgba(255, 255, 255, 0.8);
      user-select: none;
    }
    ${ButtonLink} {
      display: block;
      box-shadow: 5px 5px 35px rgba(117, 98, 224, 0.3) inset;
      padding: 3px 3px;
      border-radius: 4px;
      background-color: transparent;
      color: rgba(255, 255, 255, 0.8);
      transition: all 0.3s;

      &:hover {
        ${animationScaleIn};
        cursor: pointer;
        color: rgba(0, 0, 0, 0.8);
        background-color: rgba(117, 98, 224, 0.9);
      }
    }
  }
`
const LeftContentWrapper = styled.div`
  ${Text} {
    margin-top: 16px;
  }
`
const RightContentWrapper = styled.div``

const ContactsGridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-template-rows: minmax(50px, auto);
  justify-items: center;
  gap: 23px;
  @media ${theme.media.tabletLarge} {
    gap: 40px;

    ${Text} {
      text-align: center;
      margin-top: 5px;
    }
    ${RightContentWrapper} {
      ${SectionTitle} {
        font-size: 20px;
        line-height: 35px;
      }
      ${FlexWrapper} {
        ${Text} {
          font-size: 16px;
          line-height: 1;
        }
      }
    }
  }
  @media ${theme.media.tablet} {
    grid-template-columns: repeat(auto-fit, minmax(290px, 1fr));
    ${ContactForm} {
      input,
      textarea {
        padding: 10px;
      }
      ${FlexWrapper} {
        gap: 10px 0;
        ${Text} {
          margin-top: 0;
        }
      }
    }
  }
`
