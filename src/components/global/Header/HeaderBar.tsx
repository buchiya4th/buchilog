"use client";

import React, { useState } from 'react'
import Router from 'next/router'
import SideNav from '@/src/components/global/SideNav/SideNav'
import styles from 'styles/components/global/Header/HeaderBar.module.scss'

type Props = {
  categories: string[]
  tags: string[]
  isActiveSideNav?: boolean
}

const HeaderBar: React.FC<Props> = ({ categories, tags, isActiveSideNav = true }) => {
  const [isActive, setActive] = useState(false)
  Router.events.on('routeChangeComplete', () => setActive(false))

  return (
    <div className={styles.headerBar}>
      {isActiveSideNav &&
        <div
          className={isActive ? `${styles.navMenu} ${styles.navMenuIsActive}` : styles.navMenu}
          onClick={() => setActive(!isActive)}
        >
          <span className={isActive ? `${styles.line} ${styles.isActive}` : styles.line}></span>
          <span className={isActive ? `${styles.line} ${styles.isActive}` : styles.line}></span>
          <span className={isActive ? `${styles.line} ${styles.isActive}` : styles.line}></span>
        </div>
      }
      {isActiveSideNav &&
        <SideNav
          categories={categories}
          tags={tags}
          activeStatus={isActive}
        />
      }
    </div>
  )
}

export default HeaderBar
