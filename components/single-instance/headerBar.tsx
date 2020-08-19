import React from 'react'
import SideNav from './sideNav'
import styles from '../../styles/components/single-instance/headerBar.module.scss'
// import classnames from 'classnames'

const HeaderBar: React.FC = () => {
  return (
    <div className={styles.headerBar}>
      <div className={styles.navMenu}>
        <span className={styles.navMenu_line}></span>
        <span className={styles.navMenu_line}></span>
        <span className={styles.navMenu_line}></span>
      </div>
      <SideNav />
    </div>
  )
}

export default HeaderBar
