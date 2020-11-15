import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getSortedAllPostsData, getTags } from '@/lib/posts'
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

const Home: React.FC<Props> = (props) => {
  return (
    <Layout tags={props.tags} home>
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

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedAllPostsData()
  const tags = getTags()
  return {
    props: {
      allPostsData,
      tags,
    }
  }
}

export default Home
