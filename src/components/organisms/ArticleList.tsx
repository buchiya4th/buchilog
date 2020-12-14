import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Date from '@/src/components/atoms/Date'
import LinkList from '@/src/components/molecules/LinkList'
import { css } from '@emotion/core'
import { colors, size, fonts, media } from '@/styles/index'

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
       "data data" auto /
        1fr 28%`,
    paddingTop: size(2),
    paddingBottom: size(2),
    borderBottom: `1px solid ${colors.gray.lighter}`,
    letterSpacing: 0,
    [media.up('phoneLarge')]: {
      display: 'grid',
      gridTemplate:
      `"title image" auto
       "data image" auto /
        1fr ${size(18)}`,
    },
  })
  const titleStyle = css(
    fonts.fontHeading,
    {
      overflow: 'hidden',
      display: '-webkit-box',
      gridArea: 'title',
      fontSize: size(1.75),
      WebkitLineClamp: 3,
      WebkitBoxOrient: 'vertical',
      lineHeight: 1.5,
      [media.up('tablet')]: {
        fontSize: size(2.5),
      },
      'a': {
        textDecoration: 'none',
      }
    }
  )
  const dataStyle = css({
    gridArea: 'data',
    alignSelf: 'end',
    'a': {
      textDecoration: 'none',
    },
  })
  const dateStyle = css({
    marginRight: size(1),
  })
  const linkListStyle = css({
    [media.less('tablet')]: {
      display: 'inline-block',
    },
  })
  const categoryStyle = css({
    marginRight: size(1),
  })
  const imageStyle = css({
    gridArea: 'image',
    justifySelf: 'end',
    marginLeft: size(1),
  })

  return (
    <ul css={articleListStyle}>
      {props.articleList.map(({ id, date, title, image, category, tags }) => (
        <li css={itemStyle} key={id}>
          <div css={imageStyle}>
            <Image
              src={`/img/posts/${image}`}
              width={136}
              height={81.6}
              alt=""
            />
          </div>
          <div css={titleStyle}>
            <Link
              href="/posts/[id]"
              as={`/posts/${id}`}
              passHref
            >
              <a>{title}</a>
            </Link>
          </div>
          <div css={dataStyle}>
            <span css={dateStyle}><Date datestring={date} /></span>
            <span css={[linkListStyle, categoryStyle]}>
              <LinkList
                items={[category]}
                itemName="categories"
              />
            </span>
            <span css={linkListStyle}>
              <LinkList
                items={tags}
                itemName="tags"
              />
            </span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticleListItem
