import React from 'react'
import HeaderBar from '@/src/components/single-instance/headerBar'
import HeaderTitle from '@/src/components/single-instance/headerTitle'
import HeaderFollow from '@/src/components/single-instance/headerFollow'

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