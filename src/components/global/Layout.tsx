import React, { useEffect } from 'react'
import Head from 'next/head'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'
import { css } from '@emotion/core'
import { media, size } from '@/styles/index'

type Props = {
  children: React.ReactNode
  categories: [string]
  tags: [string]
  home?: boolean
}

const Layout: React.FC<Props> = (props) => {
  const mainStyle = css({
    maxWidth: 720,
    marginLeft: 'auto',
    marginRight: 'auto',
    [media.less('phoneLarge')]: {
      paddingLeft: size(2),
      paddingRight: size(2),
    },
  })

  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load()
    }
    if (window.FB) {
      window.FB.init({
        appId      : 1489772551268544,
        status     : true,
        xfbml      : true,
        version    : 'v8.0'
      })
    }
  })

  return (
    <>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header
        categories={props.categories}
        tags={props.tags}
      />
      <main css={mainStyle}>{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout