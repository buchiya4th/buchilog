import React from 'react'
import Link from 'next/link'
import CategoryIcon from '@/src/components/icon/Category'
import TagIcon from '@/src/components/icon/Tag'
import { css } from '@emotion/core'
import { size } from '@/styles/index'

type Props = {
  items: [string]
  itemName: string
  iconStyles?: any
  itemStyles?: any
}

const LinkList: React.FC<Props> = (props) => {
  const itemStyle = css({
    fontSize: size(1.5),
    lineHeight: 1.2,
    'span:first-of-type': {
      marginLeft: size(0.5),
    },
    'span:not(:last-of-type):after': {
      marginRight: size(1),
      content: '","',
    },
    'a': {
      paddingBottom: 1,
      textDecoration: 'none',
      transition: 'all 0.1s ease',
      '&:hover': {
        borderBottomWidth: 1,
        borderBottomStyle: 'solid',
      }
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
