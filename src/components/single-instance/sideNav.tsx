import React from 'react'
import styles from '@/styles/components/single-instance/sideNav.module.scss'

const SideNav: React.FC = () => {
  return (
    <div className={styles.sideNav}>
      <div className={styles.sideNav_searchForm}>search form</div>
      <div className={styles.sideNav_category}>category</div>
      <div className={styles.sideNav_tag}>tag</div>
    </div>
  )
}

export default SideNav