import React, { useState } from 'react'
import { css } from '@emotion/core'
import { size } from '@/styles/index'
import SideNav from '@/src/components/global/SideNav/SideNav'

type Props = {
  tags: [string]
}

const HeaderBar: React.FC<Props> = (props) => {
  const [isActive, setActive] = useState(false)

  const headerBarStyle = css({
    height: size(7),
    background: '#000 url("/img/headerBar_bg.png")',
  })

  const navMenuStyle = css({
    display: 'inline-block',
    position: 'relative',
    zIndex: 7000,
    width: size(3),
    height: size(2.5),
    margin: size(2),
    cursor: 'pointer',
    boxSizing: 'border-box',
    transition: 'all 0.2s',
  })

  const lineStyle = css({
    display: 'inline-block',
    transition: 'all 0.2s',
    boxSizing: 'border-box',
    position: 'absolute',
    left: 0,
    width: '100%',
    height: 2,
    backgroundColor: '#fff',
    borderRadius: 4,
    '&:nth-of-type(1)': {
      top: 0,
    },
    '&:nth-of-type(2)': {
      top: 9,
    },
    '&:nth-of-type(3)': {
      bottom: 0,
    },
  })

  const isActiveStyle = isActive && css({
    '&:nth-of-type(1), &:nth-of-type(3)': {
      width: 12,
    },
    '&:nth-of-type(1)': {
      transform: 'translate(-1px, 5px) rotate(-45deg)',
    },
    '&:nth-of-type(3)': {
      transform: 'translate(-1px, -5px) rotate(45deg)',
    }
  })

  return (
    <div css={headerBarStyle}>
      <div css={navMenuStyle} onClick={() => setActive(!isActive)}>
        <span css={[lineStyle, isActiveStyle]}></span>
        <span css={[lineStyle, isActiveStyle]}></span>
        <span css={[lineStyle, isActiveStyle]}></span>
      </div>
      <SideNav tags={props.tags} activeStatus={isActive} />
    </div>
  )
}

export default HeaderBar
