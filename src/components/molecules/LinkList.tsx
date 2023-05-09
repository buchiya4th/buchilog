import React from 'react'
import Link from 'next/link'
import CategoryIcon from '@/src/components/icon/Category'
import TagIcon from '@/src/components/icon/Tag'
import styles from '@/styles/components/molecules/LinkList.module.scss'

type Props = {
  items: [string]
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
        {props.items.map(item => (
          <div key={item} className={styles.itemText}>
            <Link
              href={`/${props.itemName}/[id]`}
              as={`/${props.itemName}/${item}`}
              passHref
            >
              {item}
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default LinkList
