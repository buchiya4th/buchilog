import React from 'react'
import Link from 'next/link'
import styles from './FooterArea.module.scss'

const FooterArea: React.FC = () => {
  return (
    <div className={styles.footerArea}>
      <div className={styles.footerProfile}>
        <div className={styles.profileTitle}>このサイトについて</div>
        <div className={styles.profileIcon}>
          <img className={styles.profileIconImage} src="/img/profileicon.svg" alt="ぶちや" />
          <div className={styles.profileName}>ぶちや</div>
        </div>
        <div className={styles.profileText}>
          <div className={styles.profileLead}>有益な情報より有意義な時間になるよう日々感じたことをお伝えします。 管理人は、IT企業で働きながら子育てや家事をして暮らしてます。</div>
          <div className={styles.profileDetailLink}>
            <Link href="/about/"> 詳しく見る &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterArea
