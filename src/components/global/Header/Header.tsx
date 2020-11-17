import React from 'react'
import HeaderBar from './HeaderBar'
import HeaderTitle from './HeaderTitle'
import HeaderFollow from './HeaderFollow'

type Props = {
  tags: [string]
}

const Header: React.FC<Props> = (props) => {
  return (
    <header {...props}>
      <HeaderBar tags={props.tags} />
      <HeaderTitle />
      <HeaderFollow />
    </header>
  )
}

export default Header
