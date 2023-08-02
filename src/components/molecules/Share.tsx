"use client";

import React from 'react'
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton
} from 'react-share'
import styles from 'styles/components/molecules/Share.module.scss'

type Props = {
  text: string
  url: string
}

const Share: React.FC<Props> = (props) => {
  return (
    <ul className={styles.shareUl}>
      <li className={styles.shareTwitter}>
        <TwitterShareButton
          url={props.url}
          title={props.text}
        >
          <TwitterIcon
            size={32}
            round={false}
          />
          <span className={styles.shareText}>ツイート</span>
        </TwitterShareButton>
      </li>
      <li className={styles.shareFacebook}>
        <FacebookShareButton url={props.url}>
          <FacebookIcon
            size={32}
            round={false}
          />
          <span className={styles.shareText}>シェア</span>
        </FacebookShareButton>
      </li>
      <li className={styles.shareHatena}>
        <HatenaShareButton url={props.url}>
          <HatenaIcon
            size={32}
            round={false}
          />
          <span className={styles.shareText}>はてブ</span>
        </HatenaShareButton>
      </li>
    </ul>
  )
}

export default Share
