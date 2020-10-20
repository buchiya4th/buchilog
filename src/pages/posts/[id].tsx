import React from 'react'
import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import { getAllPostIds, getPostData } from '@/lib/posts'
import Layout, { siteTitle } from '@/src/components/global/Layout'
import Date from '@/src/components/atoms/Date'
import { css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'

type Props = {
  postData: {
    title: string
    image: string
    date: string
    category: string
    tags: string[]
    contentHtml: string
  }
}

const Post: React.FC<Props> = (props) => {
  const titleStyle = css(
    fonts.fontHeading,
    {
      fontSize: size(3),
      textDecoration: 'none',
    }
  )

  const dataStyle = css({
    marginBottom: '0.25em',
    lineHeight: 1.2,
    'span': {
      display: 'inline-block',
      marginRight: '0.5em',
      fontSize: size(1.5),
      '&:last-child': {
        marginRight: 0,
      }
    }
  })

  const tagStyle = css({
    '&::before': {
      content: '"#"'
    }
  })

  const bodyStyle = css({
    'h2': {
      marginTop: size(5),
      paddingBottom: 4,
      borderBottom: `1px solid ${colors.gray.lighter}`,
      fontFamily: fonts.fontFamily.heading,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: size(2.75),
    },
    'h3': {
      marginTop: size(5),
      marginBottom: size(1),
      fontFamily: fonts.fontFamily.heading,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: size(2.5),
    },
    'h4': {
      marginTop: size(3),
      marginBottom: size(1),
      fontFamily: fonts.fontFamily.heading,
      fontWeight: 700,
      fontStyle: 'normal',
      fontSize: size(2.25),
    },
    'p': {
      lineHeight: 2.2,
      whiteSpace: 'pre-wrap',
    },
    'ul': {
      paddingLeft: '1em',
      lineHeight: 1.8,
    },
    'th, td': {
      padding: size(1),
      borderLeft: `1px solid ${colors.gray.lighter}`,
      '&:first-child': {
        borderLeft: 'none',
      }
    },
    'tr + tr > td': {
      borderTop: `1px solid ${colors.gray.lighter}`,
    },
    'thead > tr > th': {
      borderBottom: `2px solid ${colors.gray.lighter}`,
    },
    'blockquote': {
      position: 'relative',
      margin: '1em 0',
      padding: `${size(3)} ${size(2)} ${size(2)}`,
      backgroundColor: colors.white.smoke,
      fontStyle: 'italic',
      '&::before': {
        position: 'absolute',
        top: size(2),
        left: size(2),
        width: 30,
        height: 20,
        background: 'url(/img/icon_quote.svg)',
        content: '""',
      },
      'p': {
        margin: '1em 0 0',
        color: colors.gray.dark,
      }
    }
  })

  return (
    <Layout>
      <Head>
        <title>{props.postData.title} | {siteTitle}</title>
      </Head>

      <article>
        <div css={dataStyle}>
          <span><Date datestring={props.postData.date} /></span>
          <span>{props.postData.category}</span>
          {props.postData.tags.map((tag, index) => (
            <span css={tagStyle} key={index}>{tag}</span>
          ))}
        </div>
        <h1 css={titleStyle}>{props.postData.title}</h1>
        {props.postData.image && <p><img src={`/img/posts/${props.postData.image}`} /></p>}
        <div css={bodyStyle} dangerouslySetInnerHTML={{ __html: props.postData.contentHtml }} />
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
