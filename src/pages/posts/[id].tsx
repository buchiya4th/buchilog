import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Layout, { siteTitle } from '@/src/components/global/Layout'
import Date from '@/src/components/atoms/Date'

type Props = {
  postData: {
    title: string
    date: string
    contentHtml: string
  }
}

const Post: React.FC<Props> = (props) => {
  return (
    <Layout>
      <Head>
        <title>{props.postData.title} | {siteTitle}</title>
      </Head>
      <article>
        <h1>{props.postData.title}</h1>
        <div>
          <Date datestring={props.postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
      </article>
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()
  return {
    paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = await getPostData(params.id as string)
  return {
    props: {
      postData
    }
  }
}

export default Post
