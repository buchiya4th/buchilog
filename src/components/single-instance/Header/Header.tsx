import React from 'react'
import HeaderBar from './HeaderBar'
import HeaderTitle from './HeaderTitle'
import HeaderFollow from './HeaderFollow'

const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderBar />
      <HeaderTitle />
      <HeaderFollow />
    </header>
  )
}

export default Header