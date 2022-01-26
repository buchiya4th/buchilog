import React from 'react'
import Link from 'next/link'
import Date from '@/src/components/atoms/Date'
import styles from 'styles/components/organisms/ArticleList.module.scss'

type Props = {
  articleList: {
    date: string
    title: string
    id: string
    thumb: string
  }[]
}

const ArticleListItem: React.FC<Props> = (props) => {
  return (
    <ul className={styles.articleList}>
      {props.articleList.map(({ id, date, title, thumb }) => (
        <li key={id}>
          <div className={styles.image}>
            <Link
              href="/posts/[id]"
              as={`/posts/${id}`}
              passHref
            >
              <a>
                <img
                  src={`/img/posts/${thumb}`}
                  width="136"
                  height="82"
                  alt={title}
                />
              </a>
            </Link>
          </div>
          <div className={styles.title}>
            <Link
              href="/posts/[id]"
              as={`/posts/${id}`}
              passHref
            >
              <a>{title}</a>
            </Link>
          </div>
          <div className={styles.data}>
            <span className={styles.date}><Date datestring={date} /></span>
          </div>
        </li>
      ))}
    </ul>
  )
}

export default ArticleListItem
