import React from 'react'
import styles from 'styles/components/global/Header/HeaderFollow.module.scss'

const HeaderFollow: React.FC = () => {
  return (
    <div className={styles.headerFollow}>
      <div className={styles.snsFollow}>
        <div>
          最新情報を受け取る
        </div>
        <ul className={styles.snsFollowList}>
          <li>
            <a
              href="https://twitter.com/buchiya4th"
              className="twitter-follow-button"
              data-related=""
              data-show-screen-name="false"
              data-lang="ja" data-dnt="true"
              data-show-count="false"
            />
          </li>
          <li>
            <div id="fb-root"></div>
            <div className={`fb-like ${styles.fbLike}`}
              data-href="http://buchilog.com"
              data-width=""
              data-layout="button"
              data-action="like"
              data-size="small"
              data-share="false"
            />
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderFollow
