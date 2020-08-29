import React from 'react'
import { parseISO, format } from 'date-fns'
// import styles from './Date.module.scss'

type Props = {
  dateString: string
}

const Date: React.FC<Props> = (props) => {
  const date = parseISO(props.dateString)
  return (
    <>
      <time dateTime={props.dateString} className="time">{format(date, 'yyyy年L月d日')}</time>
      <style jsx>{`
        .time {
          font-size: 12px;
        }
      `}</style>
    </>
  )
}

export default Date