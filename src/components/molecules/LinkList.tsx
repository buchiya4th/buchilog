import React from 'react'
import Link from 'next/link'
import CategoryIcon from '@/src/components/icon/Category'
import TagIcon from '@/src/components/icon/Tag'
import { css } from '@emotion/core'
import { size, media } from '@/styles/index'

type Props = {
  items: [string]
  itemName: string
  iconStyles?: React.ReactNode | any
  itemStyles?: React.ReactNode
}

const LinkList: React.FC<Props> = (props) => {
  const itemStyle = css({
    fontSize: size(1.25),
    lineHeight: 1.2,
    'span': {
      display: 'inline-block',
    },
    'span:first-of-type': {
      marginLeft: size(0.5),
    },
    'span:not(:last-of-type):after': {
      marginRight: size(1),
      content: '","',
    },
    [media.up('tablet')]: {
      fontSize: size(1.5),
    },
  })

  return (
    <>
      <span css={props.iconStyles}>
        {props.itemName === 'categories' &&
          <CategoryIcon />
        }
        {props.itemName === 'tags' &&
          <TagIcon />
        }
      </span>
      <span css={[itemStyle, props.itemStyles]}>
        {props.items.map(item => (
          <span key={item}>
            <Link
              href={`/${props.itemName}/[id]`}
              as={`/${props.itemName}/${item}`}
              passHref
            >
              <a>{item}</a>
            </Link>
          </span>
        ))}
      </span>
    </>
  )
}

export default LinkList
