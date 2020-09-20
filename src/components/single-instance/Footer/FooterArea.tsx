import React from 'react'
// import Link from 'next/link'
import { css } from '@emotion/core'
import { size } from '@/styles/index'

const FooterArea: React.FC = () => {
  const footerArea = css({
    padding: `${size(4)} ${size(2)}`,
    background: 'url("/img/footerArea_bg.png")',
  })

  const footerProfileStyle = css({
    display: 'grid',
    gridTemplate:
      `"title title" minmax(1em, auto)
      "icon text" 1fr/
      48px 1fr`,
    gap: size(3),
    maxWidth: 560,
    marginLeft: 'auto',
    marginRight: 'auto',
    fontSize: size(1.75),
  })

  const profileTitleStyle = css({
    gridArea: 'title',
    fontSize: size(2.5),
    fontWeight: 'bold',
    lineHeight: 1,
  })

  const profileIconStyle = css({
    gridArea: 'icon',
    textAlign: 'center',
  })

  const profileNameStyle = css({
    marginTop: size(0.5),
  })

  const profileTextStyle = css({
    gridArea: 'text',
    lineHeight: 1.85,
  })

  const profileDetailLinkStyle = css({
    marginTop: '1em',
    textAlign: 'right',
    'a': {
      marginRight: '0.2em',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline',
      }
    }
  })

  return (
    <div css={footerArea}>
      <div css={footerProfileStyle}>
        <div css={profileTitleStyle}>このサイトについて</div>
        <div css={profileIconStyle}>
          <img src="/img/profileicon.svg" alt="ぶちや" />
          <div css={profileNameStyle}>ぶちや</div>
        </div>
        <div css={profileTextStyle}>
          <div>有益な情報より有意義な時間になるよう日々感じたことをお伝えします。 管理人は、IT企業で働きながら子育てや家事をして暮らしてます。</div>
          <div css={profileDetailLinkStyle}>
            {/* <Link href="/about/"> 詳しく見る &gt,</Link> */}
            詳しく見る &gt,
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterArea
