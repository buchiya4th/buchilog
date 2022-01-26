import React from 'react'
import { GetStaticProps } from 'next'
import Head from 'next/head'
import { getCategories, getTags } from '@/lib/posts'
import { useRouter } from 'next/router'
import Layout from '@/src/components/global/Layout'
import { metaData } from '@/const/metaData'
import Typography from '@/src/components/atoms/Typography'
import Breadcrumbs from '@/src/components/atoms/Breadcrumbs'
import styles from 'styles/pages/about.module.scss'

type Props = {
  categories: [string]
  tags: [string]
}

const About: React.FC<Props> = (props) => {
  const state = {
    aboutSite: {
      heading: 'このサイトについて',
      body: 'Webおいしいです。 Web屋の人たちと繋がっていきたいなーと思い立ち上げました。 自分の実績的な面と世の困っている人の為の社会貢献的な面で技術的なことも書いていきます的な。 ネットの人たちはいろんな人がいるので、自分の趣味と合う人とつながりたいなーっていう思いもあり、 エンタメとして情報提供するので良かったら楽しいお話しましょう。 生活してて思うことがあり、ちょっとしたことも書いていきます。 自分の脳内をメモしていきます。'
    },
    aboutAuther: {
      heading: 'なかのひとについて',
      body: '岡山県産の天然パーマ。音楽やったりWebサイトつくったりして暮らしてます。追々充実させていきます。'
    },
    biography: {
      heading: '自分史',
      body: [
        { th: '2003年', td: 'アコースティックギターを購入。音楽人生はここから始まった。' },
        { th: '2005年', td: 'Web制作について学び始める。' },
        { th: '2008年', td: '音楽活動が煮え切らず上京。新境地にて音楽修行を始める。' },
        { th: '2013年', td: '人生を見つめ直し生活基盤を安定させるため『音楽＜仕事』に比重を改める。' },
        { th: '2015年', td: '大企業へ転職して人生を謳歌する。' },
        { th: '2018年', td: '家族が増え生活スタイルが激変する。' },
        { th: '2020年', td: 'グローバル企業へ転職、そしてコロナ禍で生活スタイルが激変する。' },
      ]
    }
  }

  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${state.aboutSite.heading}`,
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
        <title>{state.aboutSite.heading} | {metaData.title}</title>
        <meta name="description" content={metaData.description} />
        <meta property="og:type" content="article" />
        <meta property="og:title" content={`${state.aboutSite.heading} | ${metaData.title}`} key="og:title" />
        <meta property="og:description" content={metaData.description} />
        <meta property="og:url" content={`${process.env.DOMAIN}${router.asPath}`} />
        <meta property="og:image" content={`${process.env.DOMAIN}${metaData.ogpImage}`} />
      </Head>

      <Breadcrumbs list={breadcrumbs} />
      <article>
        <section className="aboutSite">
          <Typography elementname="h2" styletype="heading2" value={state.aboutSite.heading} />
          <div className={styles.body}>{state.aboutSite.body}</div>
        </section>
        <section className="aboutAuther">
          <Typography elementname="h2" styletype="heading2" value={state.aboutAuther.heading} />
          <div className={styles.body}>{state.aboutAuther.body}</div>
        </section>
        <section className="biography">
          <Typography elementname="h2" styletype="heading2" value={state.biography.heading} />
          <div className={styles.body}>
            <table className={styles.table}>
              <tbody>
                {state.biography.body.map(({th, td}, index) => (
                  <tr key={index}>
                    <th>{th}</th>
                    <td>{td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
        </section>
      </article>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async () => {
  const categories = getCategories()
  const tags = getTags()
  return {
    props: {
      categories,
      tags,
    }
  }
}

export default About
