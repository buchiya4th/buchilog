import React from 'react'
import { Categories, Tags } from 'lib/posts'
import HeaderBar from './HeaderBar'
import HeaderTitle from './HeaderTitle'
import HeaderFollow from './HeaderFollow'

type Props = {
  categories: Categories
  tags: Tags
  isActiveSideNav?: boolean
}

const Header: React.FC<Props> = (props) => {
  return (
    <header>
      <HeaderBar
        categories={props.categories}
        tags={props.tags}
        isActiveSideNav={props.isActiveSideNav}
      />
      <HeaderTitle />
      <HeaderFollow />
    </header>
  )
}

export default Header
