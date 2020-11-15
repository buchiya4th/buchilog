import React from 'react'
import Link from 'next/link'
import { css } from '@emotion/core'
import TagIcon from '@/src/components/icon/Tag'
import { colors, size } from '@/styles/index'

type Props = {
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

  const tagsStyle = css({
    paddingLeft: size(2.25),
    textIndent: `-${size(2.25)}`,
    fontSize: size(1.75),
    lineHeight: 2,
    'a': {
      color: colors.gray.lighter,
      textDecoration: 'none',
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
      <div>category</div>
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