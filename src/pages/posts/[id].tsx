import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import { useRouter } from 'next/router'
import Head from 'next/head'
import { getAllPostIds, getPostData, getCategories, getTags, getRelatedArticleList } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import 'highlight.js/styles/monokai.css'
import { metaData } from '@/const/metaData'
import Date from '@/src/components/atoms/Date'
import LinkList from '@/src/components/molecules/LinkList'
import Share from '@/src/components/molecules/Share'
import ArticleList from '@/src/components/organisms/ArticleList'
import Breadcrumbs from '@/src/components/atoms/Breadcrumbs'
import Typography from '@/src/components/atoms/Typography'
import styles from 'styles/pages/posts/id.module.scss'

type Props = {
  categories: [string]
  tags: [string]
  postData: {
    title: string
    description: string
    date: string
    category: string
    tags: [string]
    image: string
    contentHtml: string
  },
  id: [string],
  relatedArticleData: {
    id: string
    title: string
    date: string
    category: string
    tags: [string]
    thumb: string
  }[]
}

const Post: React.FC<Props> = (props) => {
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${props.postData.category}`,
      path: `/categories/${props.postData.category}`,
    },
    {
      title: `${props.postData.title}`,
    },
  ]

  const router = useRouter()

  return (
    <Layout
      categories={props.categories}
      tags={props.tags}
    >
      <Head>
        <meta name="viewport" content="width=device-width,initial-scale=1" key="viewport" />
        <title>{props.postData.title} | {metaData.title}</title>
        <meta name="description" content={props.postData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${props.postData.title} | ${metaData.title}`} key="og:title" />
        <meta property="og:description" content={props.postData.description} />
        <meta property="og:url" content={`${process.env.DOMAIN}${router.asPath}`} />
        <meta property="og:image" content={`${process.env.DOMAIN}/img/posts/${props.postData.image}`} />
      </Head>

      <Breadcrumbs list={breadcrumbs} />
      <article id="article">
        <div className={styles.data}>
          <Date datestring={props.postData.date} />
          <LinkList
            items={[props.postData.category]}
            itemName="categories"
          />
        </div>
        <h1 className={styles.title}>{props.postData.title}</h1>
        {props.postData.image &&
          <img
            src={`/img/posts/${props.postData.image}`}
            width="800"
            height="480"
            alt={props.postData.title}
          />
        }
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }}
        />
        <LinkList
          items={props.postData.tags}
          itemName="tags"
        />
        <div className={styles.shareArea}>
          <Share
            text={props.postData.title}
            url={`${process.env.DOMAIN}/posts/${props.id}`}
          />
        </div>
      </article>
      <div>
        <Typography elementname="h2" styletype="heading2" value="関連記事" styles={styles.relatedArticleHeading} />
        <ArticleList articleList={props.relatedArticleData} />
      </div>
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
  const categories = getCategories()
  const tags = getTags()
  if (!params) return {props: {}}
  const postData = await getPostData(params.id as string)
  const relatedArticleData = await getRelatedArticleList(postData as any)
  const id = params.id
  return {
    props: {
      categories,
      tags,
      postData,
      id,
      relatedArticleData,
    }
  }
}

export default Post
