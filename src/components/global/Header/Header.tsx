import React from 'react'
import HeaderBar from './HeaderBar'
import HeaderTitle from './HeaderTitle'
import HeaderFollow from './HeaderFollow'

type Props = {
  categories: string[]
  tags: string[]
}

const Header: React.FC<Props> = (props) => {
  return (
    <header {...props}>
      <HeaderBar
        categories={props.categories}
        tags={props.tags}
      />
      <HeaderTitle />
      <HeaderFollow />
    </header>
  )
}

export default Header
