import React from 'react'
import Link from 'next/link'
import Date from '@/src/components/Date'
import styles from './ArticleList.module.scss'

type Props = {
  articleList: {
    date: string
    title: string
    id: string
    category: string
  }[]
}

const ArticleListItem: React.FC<Props> = (props) => {
  return (
    <>
      <ul className={styles.articleList}>
        {props.articleList.map(({ id, date, title }) => (
          <li className={styles.item} key={id}>
            <Link href="/posts/[id]" as={`/posts/${id}`}>
              <a className={styles.title}>{title}</a>
            </Link>
            <br />
            <Date dateString={date} />
          </li>
        ))}
      </ul>
    </>
  )
}

export default ArticleListItem
