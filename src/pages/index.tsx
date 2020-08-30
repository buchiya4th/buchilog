import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getSortedPostsData } from '@/lib/posts'
import Layout, { siteTitle } from '@/src/components/Layout'
import ArticleList from '@/src/components/ArticleList'
import styles from '@/src/pages/index.module.scss'
import utilStyles from '@/styles/utils.module.scss'

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

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>
        </h1>

        <p className={styles.description}>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.js</code>
        </p>

        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ArticleList articleList={props.allPostsData} />
        </section>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{' '}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
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
