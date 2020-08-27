import React from 'react'
import styles from '@/src/components/single-instance/HeaderFollow.module.scss'

const HeaderFollow: React.FC = () => {
  return (
    <div className={styles.headerFollow}>
      <div className={styles.snsFollow}>
        <div className={styles.snsFollowTitle}>
          最新情報を受け取る
        </div>
        <ul className={styles.snsFollowList}>
          <li>
            <a href="https://twitter.com/buchiya4th" className="twitter-follow-button" data-related="" data-show-screen-name="false" data-lang="ja" data-dnt="true" data-show-count="false"></a>
            <script defer src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </li>
          <li className={styles.facebookLike}>
            <div id="fb-root"></div>
            <script defer crossOrigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=1489772551268544&autoLogAppEvents=1" nonce="FYgc9evc"></script>
            <div className="fb-like" data-href="http://buchilog.com" data-width="" data-layout="button" data-action="like" data-size="small" data-share="false"></div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderFollow
