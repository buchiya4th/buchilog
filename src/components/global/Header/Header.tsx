import React from 'react'
import HeaderBar from './HeaderBar'
import HeaderTitle from './HeaderTitle'
import HeaderFollow from './HeaderFollow'

const Header: React.FC = (props) => {
  return (
    <header {...props}>
      <HeaderBar />
      <HeaderTitle />
      <HeaderFollow />
    </header>
  )
}

export default Header
