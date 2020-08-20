import React, { useState } from 'react'
import SideNav from './sideNav'
import styles from '../../styles/components/single-instance/headerBar.module.scss'
import classnames from 'classnames'

const HeaderBar: React.FC = () => {
  const [isActive, setActive] = useState(false)

  return (
    <div className={styles.headerBar}>
      <div className={classnames(styles.navMenu, { 'is-active': isActive })} onClick={() => setActive(!isActive)}>
        <span className={styles.navMenu_line}></span>
        <span className={styles.navMenu_line}></span>
        <span className={styles.navMenu_line}></span>
      </div>
      <SideNav />
    </div>
  )
}

export default HeaderBar
