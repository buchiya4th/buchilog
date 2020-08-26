import React from 'react'
import HeaderBar from '@/src/components/single-instance/HeaderBar'
import HeaderTitle from '@/src/components/single-instance/HeaderTitle'
import HeaderFollow from '@/src/components/single-instance/HeaderFollow'

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