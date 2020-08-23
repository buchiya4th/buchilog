import React from 'react'
import HeaderBar from '@/src/components/single-instance/headerBar'
import HeaderTitle from '@/src/components/single-instance/headerTitle'

const Header: React.FC = () => {
  return (
    <header className="header">
      <HeaderBar />
      <HeaderTitle />
    </header>
  )
}

export default Header