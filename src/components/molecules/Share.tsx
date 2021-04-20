import React from 'react'
import { FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton } from 'react-share'
import { css } from '@emotion/core'

type Props = {
  text: string
  url: string
}

const Share: React.FC<Props> = (props) => {
  const shareUlStyle = css({
    display: 'flex',
    margin: 0,
    padding: 0,
    listStyle: 'none',
    'li': {
      flexGrow: 1,
      borderRadius: 2,
      color: '#fff',
      '&:hover': {
        opacity: '0.9',
      },
      '&:not(:last-child)': {
        marginRight: 8,
      },
    },
    'button': {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      width: '100%',
      padding: '8px 0 !important',
      borderRadius: 2,
      lineHeight: 1,
    },
    'span': {
      paddingRight: 10,
    },
  })
  const shareTwitterStyle = css({
    backgroundColor: '#00aced',
  })
  const shareFacebookStyle = css({
    backgroundColor: '#3b5998',
  })
  const shareHatenaStyle = css({
    backgroundColor: '#009ad9',
  })

  return (
    <ul css={shareUlStyle}>
      <li css={shareTwitterStyle}>
        <TwitterShareButton
          url={props.url}
          title={props.text}
        >
          <TwitterIcon
            size={32}
            round={false}
          />
          <span>ツイート</span>
        </TwitterShareButton>
      </li>
      <li css={shareFacebookStyle}>
        <FacebookShareButton url={props.url}>
          <FacebookIcon
            size={32}
            round={false}
          />
          <span>シェア</span>
        </FacebookShareButton>
      </li>
      <li css={shareHatenaStyle}>
        <HatenaShareButton url={props.url}>
          <HatenaIcon
            size={32}
            round={false}
          />
          <span>はてブ</span>
        </HatenaShareButton>
      </li>
    </ul>
  )
}

export default Share
