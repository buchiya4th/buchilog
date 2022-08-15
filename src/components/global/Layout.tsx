import React, { useEffect } from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'
import styles from 'styles/components/global/Layout.module.scss'

interface Window {
  twttr: any
  FB: any
}
declare const window: Window

type Props = {
  children: React.ReactNode
  categories: [string]
  tags: [string]
  home?: boolean
}

const Layout: React.FC<Props> = (props) => {
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

  const AdsContentBottom = dynamic(() => import('src/components/atoms/AdsContentBottom'), { ssr: false })

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
      <main className={styles.main}>
        {props.children}
        <AdsContentBottom />
      </main>
      <Footer />
    </>
  )
}

export default Layout