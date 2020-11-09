import React from 'react'
import { css } from '@emotion/core'
import { colors, size } from '@/styles/index'

const HeaderFollow: React.FC = () => {
  const headerFollowStyle = css({
    padding: `${size(3)} ${size(2)}`,
    textAlign: 'center',
  })

  const snsFollowStyle = css({
    position: 'relative',
    maxWidth: 320,
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: size(2),
    '&::before, &::after': {
      position: 'absolute',
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      display: 'block',
      margin: 'auto',
      content: `""`,
    },
    '&::before': {
      zIndex: -2,
      width: '100%',
      height: '100%',
      background: 'url("/img/sns_follow_bg.png")',
    },
    '&::after': {
      zIndex: -1,
      width: `calc(100% - calc(6px * 2))`,
      height: `calc(100% - calc(6px * 2))`,
      backgroundColor: colors.white.main,
    }
  })

  const snsFollowListStyle = css({
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-end',
    margin: '6px 0 0',
    paddingLeft: 0,
    listStyle: 'none',
    'li': {
      '&:not(:first-child)': {
        marginLeft: 4,
      }
    }
  })

  const facebookLikeStyle = css({
    paddingBottom: 7,
  })

  return (
    <div css={headerFollowStyle}>
      <div css={snsFollowStyle}>
        <div>
          最新情報を受け取る
        </div>
        <ul css={snsFollowListStyle}>
          <li>
            <a href="https://twitter.com/buchiya4th" className="twitter-follow-button" data-related="" data-show-screen-name="false" data-lang="ja" data-dnt="true" data-show-count="false"></a>
            <script defer src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
          </li>
          <li css={facebookLikeStyle}>
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