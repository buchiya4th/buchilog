"use client";

import React, { useState } from 'react'
import Router from 'next/router'
import SideNav from '@/src/components/global/SideNav/SideNav'
import styles from 'styles/components/global/Header/HeaderBar.module.scss'

type Props = {
  categories: string[]
  tags: string[]
}

const HeaderBar: React.FC<Props> = (props) => {
  const [isActive, setActive] = useState(false)
  Router.events.on('routeChangeComplete', () => setActive(false))

  return (
    <div className={styles.headerBar}>
      <div
        className={isActive ? `${styles.navMenu} ${styles.navMenuIsActive}` : styles.navMenu}
        onClick={() => setActive(!isActive)}
      >
        <span className={isActive ? `${styles.line} ${styles.isActive}` : styles.line}></span>
        <span className={isActive ? `${styles.line} ${styles.isActive}` : styles.line}></span>
        <span className={isActive ? `${styles.line} ${styles.isActive}` : styles.line}></span>
      </div>
      <SideNav
        categories={props.categories}
        tags={props.tags}
        activeStatus={isActive}
      />
    </div>
  )
}

export default HeaderBar
