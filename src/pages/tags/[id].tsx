import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSortedTagsPostsData, getCategories, getTags } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import { metaData } from '@/const/metaData'
import ArticleList from '@/src/components/organisms/ArticleList'
import Breadcrumbs from '@/src/components/atoms/Breadcrumbs'

type Props = {
  categories: [string]
  tags: [string]
  allPostsData: {
    id: string
    title: string
    date: string
    category: string
    tags: [string]
    thumb: string
  }[]
  id: string
}

const Tags: React.FC<Props> = (props) => {
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${props.id}`,
    },
  ]

  return (
    <Layout
      categories={props.categories}
      tags={props.tags}
    >
      <Head>
        <title>{props.id} | {metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${metaData.title}`} key="og:title" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={`${process.env.DOMAIN}`} />
        <meta property="og:image" content={`${process.env.DOMAIN}${metaData.ogpImage}`} />
      </Head>

      <Breadcrumbs list={breadcrumbs} />
      <ArticleList articleList={props.allPostsData} />
    </Layout>
  )
}
export const getServerSideProps: GetServerSideProps = async ({query}) => {
  const id = query.id
  const allPostsData = getSortedTagsPostsData(id as string)
  const categories = getCategories()
  const tags = getTags()
  return {
    props: {
      allPostsData,
      categories,
      tags,
      id,
    }
  }
}

export default Tags
