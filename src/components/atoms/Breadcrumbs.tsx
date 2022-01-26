import React from 'react'
import HomeIcon from '@/src/components/icon/Home'
import styles from 'styles/components/atoms/Breadcrumbs.module.scss'

type Props = {
  list: ({
    title: string
    path: string
  } | {
    title: string
    path?: undefined
  })[]
}

const Breadcrumbs: React.FC<Props> = (props) => {
  return (
    <ol aria-label="breadcrumb" className={styles.breadcrumbs}>
      {props.list.map(({title, path}, index) => (
        <li key={index}>
          {index === 0
            ?
              <>
                <span className={styles.homeIcon}>
                  <HomeIcon styles={styles.icon} />
                </span>
                <a href={path}>{title}</a>
              </>
            :
              props.list.length - 1 !== index
                ? <a href={path}>{title}</a>
                : <span aria-current="page">{title}</span>
          }
        </li>
      ))}
    </ol>
  )
}

export default Breadcrumbs
