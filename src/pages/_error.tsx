import React from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import { getCategories, getTags } from '@/lib/posts'
import Layout from '@/src/components/global/Layout'
import LinkList from '@/src/components/molecules/LinkList'
import { css } from '@emotion/core'
import { size, media } from '@/styles/index'
import Typography from '@/src/components/atoms/Typography'

type Props = {
  categories: [string]
  tags: [string]
  statusCode: string
}

const Error: React.FC<Props> = (props) => {
  const textStyles = css({
    margin: '2em auto',
  })
  const linkAreaStyle = css({
    marginTop: '1em',
  })
  const linkListStyle = css({
    marginLeft: size(1),
    paddingLeft: '1em',
    textIndent: '-1em',
    'span': {
      textIndent: 0,
    }
  })
  const linkItemStyle = css({
    fontSize: size(2),
    [media.up('tablet')]: {
      fontSize: size(2),
    },
  })
  const goTopPage = css({
    textAlign: 'center',
  })

  return (
    <Layout
      categories={props.categories}
      tags={props.tags}
    >
      {props.statusCode.toString().slice(0, 1) === '4'
        ? <Typography css={textStyles} elementname="h1" styletype="heading1" value="ページが見つかりませんでした。" />
        : <Typography css={textStyles} elementname="h1" styletype="heading1" value="サーバエラーが発生しました。" />
      }
      <div css={linkAreaStyle}>
        <div css={linkListStyle}>
          <LinkList
            items={props.categories}
            itemName="categories"
            itemStyles={linkItemStyle}
          />
        </div>
        <div css={linkListStyle}>
          <LinkList
            items={props.tags}
            itemName="tags"
            itemStyles={linkItemStyle}
          />
        </div>
      </div>
      <p css={goTopPage}>
        <Link href="/">
          <a>トップページへ</a>
        </Link>
      </p>
    </Layout>
  )
}

export const getStaticProps: GetStaticProps = async ({ res, err }: any) => {
  const categories = getCategories()
  const tags = getTags()
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404
  return {
    props: {
      categories,
      tags,
      statusCode,
    }
  }
}

export default Error
