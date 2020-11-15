import React from 'react'
import { GetServerSideProps } from 'next'
import Head from 'next/head'
import { getSortedTagsPostsData, getTags } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import { metaData } from '@/const/metaData'
import ArticleList from '@/src/components/molecules/ArticleList'

type Props = {
  tags: [string]
  allPostsData: {
    date: string
    title: string
    id: string
    category: string
    tags: [string]
    image: string
  }[]
}

const Tags: React.FC<Props> = (props) => {
  // console.log('tags', props)
  return (
    <Layout tags={props.tags}>
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
  const id = query.id
  const allPostsData = getSortedTagsPostsData(id as string)
  const tags = getTags()
  return {
    props: {
      allPostsData,
      tags,
      id,
    }
  }
}

export default Tags
