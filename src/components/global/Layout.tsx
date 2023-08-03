import React from 'react'
import Head from 'next/head'
import dynamic from 'next/dynamic'
import { getCategories, getTags } from '@/lib/posts'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'
import styles from 'styles/components/global/Layout.module.scss'

type Props = {
  children: React.ReactNode
  home?: boolean
}

const Layout: React.FC<Props> = (props) => {
  const categories = getCategories()
  const tags = getTags()
  const AdsContentBottom = dynamic(() => import('src/components/atoms/AdsContentBottom'), { ssr: false })

  return (
    <div className={styles.wrap}>
      <Head>
        <link
          rel="icon"
          href="/favicon.ico"
        />
      </Head>

      <Header
        categories={categories}
        tags={tags}
      />
      <main className={styles.main}>
        {props.children}
        <AdsContentBottom />
      </main>
      <Footer />
    </div>
  )
}

export default Layout