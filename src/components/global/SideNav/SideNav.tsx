import React from 'react'
import { css } from '@emotion/core'
import LinkList from '@/src/components/molecules/LinkList'
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

  const linkListStyle = css({
    display: 'block',
    paddingLeft: size(3),
    textIndent: `-${size(3)}`,
    'span': {
      textIndent: 0,
    }
  })

  const linkListTextStyles = css({
    lineHeight: 2,
    'span': {
      display: 'inline-block',
      fontSize: size(1.75),
    },
    'span:first-of-type': {
      marginLeft: 0,
    },
    'a': {
      color: colors.gray.lighter,
    },
  })

  const linkListIconStyles = css({
    display: 'inline-block',
    width: size(2),
    marginRight: size(1),
    textAlign: 'center',
    'path': {
      fill: colors.gray.lighter,
    }
  })

  return (
    <div css={[sideNavStyle, isActiveStyle]}>
      <div>search form</div>
      <span css={linkListStyle}>
        <LinkList
          items={props.categories}
          itemName="categories"
          iconStyles={linkListIconStyles}
          itemStyles={linkListTextStyles}
        />
      </span>
      <span css={linkListStyle}>
        <LinkList
          items={props.tags}
          itemName="tags"
          iconStyles={linkListIconStyles}
          itemStyles={linkListTextStyles}
        />
      </span>
    </div>
  )
}

export default SideNav