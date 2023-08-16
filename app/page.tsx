import React from 'react'
import { getAllPostsData, sortPostsData } from '@/lib/posts'
import ArticleList from '@/app/_components/organisms/ArticleList'
import Layout from '@/app/_components/global/Layout'

export default function Page(): JSX.Element {
  const allPostsData = getAllPostsData()
  const sortAllPostsData = sortPostsData(allPostsData)

  return (
    <Layout>
      <ArticleList articleList={sortAllPostsData} />
    </Layout>
  )
}
