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
    image: string
  }[]
}

const ArticleListItem: React.FC<Props> = (props) => {
  const articleListStyle = css({
    margin: 0,
    padding: 0,
    listStyle: 'none',
  })

  const itemStyle = css({
    display: 'grid',
    gridTemplate:
      `"title image" auto
       "data image" auto /
        1fr ${size(18)}`,
    paddingTop: size(2),
    paddingBottom: size(2),
    borderBottom: `1px solid ${colors.gray.lighter}`,
  })

  const titleStyle = css(
    fonts.fontHeading,
    {
      gridArea: 'title',
      fontSize: size(3),
      'a': {
        textDecoration: 'none',
        color: colors.link.main,
      }
    }
  )

  const dataStyle = css({
    gridArea: 'data',
    alignSelf: 'end',
  })

  const imageStyle = css({
    gridArea: 'image',
    marginLeft: size(1),
  })

  return (
    <ul css={articleListStyle}>
      {props.articleList.map(({ id, date, title, image }) => (
        <li css={itemStyle} key={id}>
          <div css={titleStyle}>
            <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </div>
          <div css={dataStyle}>
            <Date datestring={date} />
          </div>
          <div css={imageStyle}>
            <img src={`/img/posts/${image}`} alt=""/>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticleListItem
