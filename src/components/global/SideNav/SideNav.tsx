import React from 'react'
import LinkList from '@/src/components/molecules/LinkList'
import styles from 'styles/components/global/SideNav.module.scss'

type Props = {
  categories: string[]
  tags: string[]
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
