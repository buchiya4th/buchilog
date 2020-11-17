import React from 'react'
import Link from 'next/link'
import Date from '@/src/components/atoms/Date'
import TagIcon from '@/src/components/icon/Tag'
import { css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'

type Props = {
  articleList: {
    date: string
    title: string
    id: string
    category: string
    tags: [string]
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
      }
    }
  )

  const dataStyle = css({
    gridArea: 'data',
    alignSelf: 'end',
  })

  const dateStyle = css({
    marginRight: size(1),
  })

  const tagsStyle = css({
    'span:first-of-type': {
      marginLeft: size(0.5),
    },
    'span + span': {
      marginLeft: size(1),
    },
    'span:not(:last-of-type):after': {
      content: '","',
    },
    'a': {
      textDecoration: 'none',
    },
  })

  const imageStyle = css({
    gridArea: 'image',
    marginLeft: size(1),
  })

  return (
    <ul css={articleListStyle}>
      {props.articleList.map(({ id, date, title, image, tags }) => (
        <li css={itemStyle} key={id}>
          <div css={titleStyle}>
            <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
              <a>{title}</a>
            </Link>
          </div>
          <div css={dataStyle}>
            <span css ={dateStyle}><Date datestring={date} /></span>
            <span css={tagsStyle}>
              <TagIcon />
              {tags.map(tag => (
                <span key={tag}>
                  <Link href="/tags/[id]" as={`/tags/${tag}`} passHref>
                    <a>{tag}</a>
                  </Link>
                </span>
              ))}
            </span>
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
