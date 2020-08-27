import React from 'react'
import styles from './HeaderTitle.module.scss'

const HeaderTitle: React.FC = () => {
  return (
    <div className={styles.headerTitle}>
      <p className={styles.siteLog}>
        <img src="/img/logo.svg" alt="ぶちろぐ" />
      </p>
      <div className={styles.siteLead}>
        このサイトは、Webと音楽を愛する人の提供でお送りします。
      </div>
    </div>
  )
}

export default HeaderTitle