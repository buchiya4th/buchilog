import React from 'react'
import Link from 'next/link'
import Date from '@/src/components/atoms/Date'
import { css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'

type Props = {
  articleList: {
    date: string
    title: string
    id: string
    category: string
  }[]
}

const ArticleListItem: React.FC<Props> = (props) => {
  const articleListStyle = css({
    margin: 0,
    padding: 0,
    listStyle: 'none',
  })

  const itemStyle = css({
    paddingTop: size(3),
    paddingBottom: size(1),
    borderBottom: `1px solid ${colors.gray.lighter}`,
  })

  const titleStyle = css(
    fonts.fontHeading,
    {
      fontSize: size(3),
      textDecoration: 'none',
      color: colors.link.main,
    }
  )

  return (
    <>
      <ul css={articleListStyle} {...props}>
        {props.articleList.map(({ id, date, title }) => (
          <li css={itemStyle} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
              <a css={titleStyle}>{title}</a>
            </Link>
            <br />
            <Date datestring={date} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ArticleListItem
