import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getCategories, getTags } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import LinkList from '@/src/components/molecules/LinkList'
import Typography from '@/src/components/atoms/Typography'
import styles from 'styles/pages/404.module.scss'

type Props = {
  categories: [string]
  tags: [string]
}

const Custom404: React.FC<Props> = (props) => {
  return (
    <Layout
      categories={props.categories}
      tags={props.tags}
    >
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
    </Layout>
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

export default Custom404
