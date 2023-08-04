"use client";

import React, { useEffect } from 'react'
import styles from 'styles/components/global/Header/HeaderFollow.module.scss'

interface Window {
  twttr: any
  FB: any
}
declare const window: Window

const HeaderFollow: React.FC = () => {
  useEffect(() => {
    if (window.twttr) {
      window.twttr.widgets.load()
    }
    if (window.FB) {
      window.FB.init({
        appId      : 1489772551268544,
        status     : true,
        xfbml      : true,
        version    : 'v8.0'
      })
    }
  })

  return (
    <div className={styles.headerFollow}>
      <div className={styles.snsFollow}>
        <div>
          最新情報を受け取る
        </div>
        <ul className={styles.snsFollowList}>
          {/* <li>
            <a
              href="https://twitter.com/buchiya4th"
              className="twitter-follow-button"
              data-related=""
              data-show-screen-name="false"
              data-lang="ja" data-dnt="true"
              data-show-count="false"
            />
          </li> */}
          <li>
            <div>
              <div id="fb-root"></div>
              <div className={`fb-like ${styles.fbLike}`}
                data-href="http://buchilog.com"
                data-width=""
                data-layout="button"
                data-action="like"
                data-size="small"
                data-share="false"
                />
              </div>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default HeaderFollow
