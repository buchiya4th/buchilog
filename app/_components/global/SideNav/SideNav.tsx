import React from 'react'
import LinkList from '@/app/_components/molecules/LinkList'
import { Categories, Tags } from 'lib/posts'
import styles from './SideNav.module.scss'

type Props = {
  categories: Categories
  tags: Tags
  activeStatus?: boolean
}

const SideNav: React.FC<Props> = (props) => {
  return (
    <div className={props.activeStatus ? `${styles.sideNav} ${styles.isActive}` : styles.sideNav}>
      <LinkList
        items={props.categories}
        itemName="categories"
        iconStyles={styles.linkListIcon}
        itemStyles={styles.linkListText}
      />
      <LinkList
        items={props.tags}
        itemName="tags"
        iconStyles={styles.linkListIcon}
        itemStyles={styles.linkListText}
      />
    </div>
  )
}

export default SideNav
