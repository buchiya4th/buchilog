import React from 'react'
import Layout from '../../components/layout'
import { GetStaticProps, GetStaticPaths } from 'next'
import { getAllPostIds, getPostData } from '../../lib/posts'
import Head from 'next/head'
import Date from '../../components/date'
import utilStyles from '../../styles/utils.module.scss'

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
        <title>{props.postData.title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{props.postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={props.postData.date} />
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
