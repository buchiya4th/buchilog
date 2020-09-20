import React from 'react'
import { css } from '@emotion/core'
import { colors, size } from '@/styles/index'

type Props = {
  activeStatus?: boolean
}

const SideNav: React.FC<Props> = (props) => {
  const sideNavStyle = css({
    position: 'absolute',
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

  return (
    <div css={[sideNavStyle, isActiveStyle]}>
      <div>search form</div>
      <div>category</div>
      <div>tag</div>
    </div>
  )
}

export default SideNav