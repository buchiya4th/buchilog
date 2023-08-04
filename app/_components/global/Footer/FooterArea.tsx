import React from 'react'
import Link from 'next/link'
import Typography from '@/app/_components/atoms/Typography'
import styles from 'styles/components/global/Footer/FooterArea.module.scss'

const FooterArea: React.FC = () => {
  return (
    <div className={styles.footerArea}>
      <div className={styles.footerProfile}>
        <Typography elementname="div" styletype="heading4" value="このサイトについて" styles={styles.profileTitle} />
        <div className={styles.profileIcon}>
          <Link href="/about/">
            <img
              src="/img/profileIcon.svg"
              width={48}
              height={60.75}
              alt="ぶちや"
            />
          </Link>
          <div className={styles.profileName}>ぶちや</div>
        </div>
        <div className={styles.profileText}>
          <div>フロントエンドエンジニアが、技術的な話題や書籍、公私それぞれでの学びを通じて得た知見を主なテーマとして投稿する個人ブログです。実践的な知識やスキルの解説、考えるきっかけとなる話題などを通じて役立つ情報を提供します。</div>
          <div className={styles.profileDetailLink}>
            <Link href="/about/">詳しく見る &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FooterArea
