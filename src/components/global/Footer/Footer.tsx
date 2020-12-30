import React from 'react'
import FooterArea from './FooterArea'
import FooterBar from './FooterBar'
import { css } from '@emotion/core'
import { media, size } from '@/styles/index'

const Footer: React.FC = () => {
  const footerStyle = css({
    marginTop: size(10),
    [media.up('tablet')]: {
      marginTop: size(20.25),
    }
  })

  return (
    <footer css={footerStyle}>
      <FooterArea />
      <FooterBar />
    </footer>
  )
}

export default Footer
