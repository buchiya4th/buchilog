import React from 'react'
import { css } from '@emotion/core'
import { colors, size } from '@/styles/index'

const HeaderTitle: React.FC = () => {
  const headerTitleStyle = css({
    padding: `${size(6)} ${size(2)}`,
    background: '#5d2369 url("/img/headerTitle_bg.png")',
    backgroundBlendMode: 'darken',
    color: colors.white.main,
    textAlign: 'center',
  })

  const siteLogStyle = css({
    margin: size(1)
  })

  return (
    <div css={headerTitleStyle}>
      <p css={siteLogStyle}>
        <img src="/img/logo.svg" alt="ぶちろぐ" />
      </p>
      <div>
        このサイトは、Webと音楽を愛する人の提供でお送りします。
      </div>
    </div>
  )
}

export default HeaderTitle