import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSortedCategoryPostsData, getCategories, getTags } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import { metaData } from '@/const/metaData'
import ArticleList from '@/src/components/organisms/ArticleList'

type Props = {
  categories: [string]
  tags: [string]
  allPostsData: {
    id: string
    title: string
    date: string
    category: string
    tags: [string]
    image: string
  }[]
}

const Category: React.FC<Props> = (props) => {
  return (
    <Layout
      categories={props.categories}
      tags={props.tags}
    >
      <Head>
        <title>{metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${metaData.title}`} key="og:title" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={`${process.env.DOMAIN}`} />
        <meta property="og:image" content={`${process.env.DOMAIN}${metaData.ogpImage}`} />
      </Head>

      <ArticleList articleList={props.allPostsData} />
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const categories = getCategories()
  const tags = getTags()
  const id = query.id
  const allPostsData = getSortedCategoryPostsData(id as string)
  return {
    props: {
      categories,
      tags,
      allPostsData,
      id,
    }
  }
}

export default Category
