import React from 'react'
import { GetStaticProps } from 'next'
import dynamic from 'next/dynamic'
import Link from 'next/link'
import { getCategories, getTags } from '@/lib/posts'
import LinkList from '@/src/components/molecules/LinkList'
import Typography from '@/src/components/atoms/Typography'
import Header from '@/src/components/global/Header/Header'
import Footer from '@/src/components/global/Footer/Footer'
import layoutStyles from 'styles/components/global/Layout.module.scss'
import styles from 'styles/pages/404.module.scss'

type Props = {
  categories: string[]
  tags: string[]
}

const Custom500: React.FC<Props> = (props) => {
  const AdsContentBottom = dynamic(() => import('src/components/atoms/AdsContentBottom'), { ssr: false })

  return (
    <>
      <Header
        categories={props.categories}
        tags={props.tags}
      />
      <main className={layoutStyles.main}>
        <Typography elementname="h1" styletype="heading1" value="ページが見つかりませんでした。" />
        <div className={styles.linkArea}>
          <LinkList
            items={props.categories}
            itemName="categories"
            itemStyles={styles.linkItem}
          />
          <LinkList
            items={props.tags}
            itemName="tags"
            itemStyles={styles.linkItem}
          />
        </div>
        <p className={styles.goTopPage}>
          <Link href="/">
            トップページへ
          </Link>
        </p>
        <AdsContentBottom />
      </main>
      <Footer />
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getCategories()
  const tags = getTags()
  return {
    props: {
      categories,
      tags,
    }
  }
}

export default Custom500
