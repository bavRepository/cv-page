import styled from 'styled-components'
import { Icon } from '../icon/Icon.tsx'
import { animateScroll as scroll } from 'react-scroll'
import { animationScaleIn } from '../animation/Animation.tsx'
import { useEffect, useState } from 'react'

export const GoTopBtn = () => {
  const [showBtn, setShowBtn] = useState(false)
  useEffect(() => {
    const goScrollingTop = () => {
      if (window.scrollY > 200) {
        setShowBtn(true)
      } else {
        setShowBtn(false)
      }
    }
    window.addEventListener('scroll', goScrollingTop)
    return () => {
      window.removeEventListener('scroll', goScrollingTop)
    }
  }, [])
  return (
    <>
      {showBtn && (
        <StyledGoTopBtn onClick={() => scroll.scrollToTop()}>
          <Icon $iconId={'goTopBtn'} $viewBox={'0 0 512 512'} $width={'40px'} $height={'40px'}></Icon>
        </StyledGoTopBtn>
      )}
    </>
  )
}

const StyledGoTopBtn = styled.button`
  border-radius: 100%;
  position: fixed;
  right: 30px;
  bottom: 30px;

  cursor: pointer;
  transition: all 0.3ms ease-in-out;
  &:hover {
    opacity: 0.7;
    ${animationScaleIn};
  }
`
