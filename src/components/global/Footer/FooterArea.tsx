import React from 'react'
import Link from 'next/link'
import Typography from '@/src/components/atoms/Typography'
import styles from 'styles/components/global/Footer/FooterArea.module.scss'

const FooterArea: React.FC = () => {
  return (
    <div className={styles.footerArea}>
      <div className={styles.footerProfile}>
        <Typography elementname="div" styletype="heading4" value="このサイトについて" styles={styles.profileTitle} />
        <div className={styles.profileIcon}>
          <Link href="/about/">
            <a>
              <img
                src="/img/profileIcon.svg"
                width={48}
                height={60.75}
                alt="ぶちや"
              />
            </a>
          </Link>
          <div className={styles.profileName}>ぶちや</div>
        </div>
        <div className={styles.profileText}>
          <div>有益な情報より有意義な時間になるよう日々感じたことをお伝えします。 管理人は、IT企業で働きながら子育てや家事をして暮らしてます。</div>
          <div className={styles.profileDetailLink}>
            <Link href="/about/"><a>詳しく見る &gt;</a></Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterArea
