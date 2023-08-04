"use client";

import React from 'react'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import Typography from '@/app/_components/atoms/Typography'
import Header from '@/app/_components/global/Header/Header'
import Footer from '@/app/_components/global/Footer/Footer'
import layoutStyles from 'styles/components/global/Layout.module.scss'
import '@/styles/globals.scss'
import styles from 'styles/pages/404.module.scss'

const NotFound: React.FC = () => {
  const AdsContentBottom = dynamic(() => import('@/app/_components/atoms/AdsContentBottom'), { ssr: false })
  const categories = ['']
  const tags = ['']
  const isActiveSideNav = false

  return (
    <div className={layoutStyles.wrap}>
      <Header
        categories={categories}
        tags={tags}
        isActiveSideNav={isActiveSideNav}
      />
      <main className={layoutStyles.main}>
        <Typography elementname="h1" styletype="heading1" value="ページが見つかりませんでした。" />
        <Typography elementname='p' styletype="p" value="お探しのページは、一時的にアクセスできない状況にあるか、もしくは移動・削除された可能性があります。" />
        <Typography elementname='p' styletype="p" value="ホームから記事一覧やメニューから目的の記事をお探しください。" />
        <p className={styles.goTopPage}>
          <Link href="/">
            ホーム &gt;
          </Link>
        </p>
        <AdsContentBottom />
      </main>
      <Footer />
      <script defer src="https://platform.twitter.com/widgets.js"></script>
      <script defer crossOrigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=1489772551268544&autoLogAppEvents=1" nonce="FYgc9evc"></script>
    </div>
  )
}

export default NotFound
