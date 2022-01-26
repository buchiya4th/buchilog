import React from 'react'
import Link from 'next/link'
import { metaData } from '@/const/metaData'
import styles from 'styles/components/global/Header/HeaderTitle.module.scss'

const HeaderTitle: React.FC = () => {
  return (
    <div className={styles.headerTitle}>
      <p className={styles.siteLogo}>
        <Link href="/">
          <a>
            <img
              src="/img/logo.svg"
              width={224}
              height={51}
              alt={metaData.title}
              className={styles.siteLogoImage}
            />
          </a>
        </Link>
      </p>
      <div className={styles.description}>{metaData.description}</div>
    </div>
  )
}

export default HeaderTitle