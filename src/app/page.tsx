import React from 'react'
import { getAllPostsData, sortPostsData } from '@/lib/posts'
import ArticleList from '@/src/components/organisms/ArticleList'
import Layout from '@/src/components/global/Layout'
import { generateRssFeed }from 'utils/generateRssFeed.js'

export async function Home(): Promise<JSX.Element> {
  await generateRssFeed()
  const allPostsData = getAllPostsData()
  const sortAllPostsData = sortPostsData(allPostsData)

  return (
    <Layout>
      <ArticleList articleList={sortAllPostsData} />
    </Layout>
  )
}

export default Home
