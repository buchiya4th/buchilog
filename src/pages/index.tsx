import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getSortedPostsData } from '@/lib/posts'
import Layout, { siteTitle } from '@/src/components/global/Layout'
import ArticleList from '@/src/components/molecules/ArticleList'

type Props = {
  allPostsData: {
    date: string
    title: string
    id: string
    category: string
  }[]
}

const Home: React.FC<Props> = (props) => {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <main>
        <section>
          <ArticleList articleList={props.allPostsData} />
        </section>
      </main>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default Home
