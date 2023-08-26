import { parseISO, format } from 'date-fns'
import React from 'react'
import styles from './Date.module.scss'

type Props = {
  datestring: string
}

const Date: React.FC<Props> = (props) => {
  const parseDate = parseISO(props.datestring)
  const date = format(parseDate, 'yyyy/L/d')

  return (
    <time
      dateTime={props.datestring}
      className={styles.time}
      {...props}
    >
      {date}
    </time>
  )
}

export default Date
