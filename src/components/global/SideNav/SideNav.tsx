import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/core'
import CategoryIcon from '@/src/components/icon/Category'
import TagIcon from '@/src/components/icon/Tag'
import { colors, size } from '@/styles/index'

type Props = {
  categories: [string]
  tags: [string]
  activeStatus?: boolean
}

const SideNav: React.FC<Props> = (props) => {
  const sideNavStyle = css({
    position: 'fixed',
    top: 0,
    left: `-${size(40)}`,
    zIndex: 6000,
    width: size(40),
    height: '100vh',
    padding: `${size(7)} ${size(2)} ${size(3)}`,
    backgroundColor: colors.black.main,
    color: colors.white.smoke,
    transition: 'all 0.1s ease',
  })

  const isActiveStyle = props.activeStatus && css({
    left: 0,
  })

  const categoryStyle = css({
    paddingLeft: size(2.25),
    textIndent: `-${size(2.25)}`,
    fontSize: size(1.75),
    lineHeight: 2,
    'a': {
      paddingBottom: 1,
      color: colors.gray.lighter,
      textDecoration: 'none',
      transition: 'all 0.1s ease',
      '&:hover': {
        borderBottom: '1px solid #fff',
      }
    },
    'span': {
      display: 'inline-block',
      textIndent: 0,
      marginRight: size(1),
    },
    'span:last-child': {
      marginRight: 0,
    },
  })

  const categoryIconStyle = css({
    display: 'inline-block',
    width: size(1.25),
    marginRight: size(1),
    'path': {
      fill: colors.gray.lighter,
    }
  })

  const tagsStyle = css({
    paddingLeft: size(2.25),
    textIndent: `-${size(2.25)}`,
    fontSize: size(1.75),
    lineHeight: 2,
    'a': {
      paddingBottom: 1,
      color: colors.gray.lighter,
      textDecoration: 'none',
      transition: 'all 0.1s ease',
      '&:hover': {
        borderBottom: '1px solid #fff',
      }
    },
    'span': {
      display: 'inline-block',
      textIndent: 0,
      marginRight: size(1),
    },
    'span:last-child': {
      marginRight: 0,
    },
  })

  const tagIconStyle = css({
    display: 'inline-block',
    width: size(1.25),
    marginRight: size(1),
    'path': {
      fill: colors.gray.lighter,
    }
  })

  return (
    <div css={[sideNavStyle, isActiveStyle]}>
      <div>search form</div>
      <div css={categoryStyle}>
        <CategoryIcon styles={categoryIconStyle} />
        {props.categories.map(category => (
          <span key={category}>
            <Link href="/categories/[id]" as={`/categories/${category}`} passHref>
              <a>{category}</a>
            </Link>
          </span>
        ))}
      </div>
      <div css={tagsStyle}>
        <TagIcon styles={tagIconStyle} />
        {props.tags.map(tag => (
          <span key={tag}>
            <Link href="/tags/[id]" as={`/tags/${tag}`} passHref>
              <a>{tag}</a>
            </Link>
          </span>
        ))}
      </div>
    </div>
  )
}

export default SideNav