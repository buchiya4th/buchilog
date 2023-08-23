import React from 'react'
import Link from 'next/link'
import CategoryIcon from '@/app/_components/icon/Category'
import TagIcon from '@/app/_components/icon/Tag'
import { Categories, Tags } from 'lib/posts'
import styles from './LinkList.module.scss'

type Props = {
  items: Categories | Tags
  itemName: string
  iconStyles?: React.ReactNode
  itemStyles?: React.ReactNode
}

const LinkList: React.FC<Props> = (props) => {
  return (
    <div className={styles.linkList}>
      <div className={`${styles.icon} ${props.iconStyles}`}>
        {props.itemName === 'categories' &&
          <CategoryIcon />
        }
        {props.itemName === 'tags' &&
          <TagIcon />
        }
      </div>
      <div className={`${styles.item} ${props.itemStyles}`}>
        {props.items.map((item, index) => (
          <div key={index} className={styles.itemText}>
            <Link
              href={`/${props.itemName}/[id]`}
              as={`/${props.itemName}/${item.slug}`}
              passHref
            >
              {item.name}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkList
