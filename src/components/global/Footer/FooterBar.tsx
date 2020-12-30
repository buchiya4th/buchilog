import React from 'react'
import { css } from '@emotion/core'
import { colors, size } from '@/styles/index'

const FooterBar: React.FC = () => {
  const footerBar = css({
    paddingTop: size(1.5),
    paddingBottom: size(1.5),
    background: colors.gray.darkest,
    color: colors.white.main,
    textAlign: 'center',
    fontSize: size(1.75),
  })

  return (
    <div css={footerBar}>&copy; 2015 buchilog.com.</div>
  )
}

export default FooterBar
