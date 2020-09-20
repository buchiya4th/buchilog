import React from 'react'
import Head from 'next/head'
import Link from 'next/link'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'
import { css } from '@emotion/core'
import { media, size } from '@/styles/index'

// const name = 'ぶちや'
export const siteTitle = 'ぶちろぐ'

type Props = {
  children: React.ReactNode
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
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta
          name="description"
          content="Learn how to build a personal website using Next.js"
        />
        <meta
          property="og:image"
          content={`https://og-image.now.sh/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>

      <Header />
      <main css={mainStyle}>{props.children}</main>
      {!props.home && (
        <div>
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
      <Footer />
    </>
  )
}

export default Layout