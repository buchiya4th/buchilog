import React from 'react'
import { parseISO, format } from 'date-fns'
import { css } from '@emotion/core'

type Props = {
  datestring: string
}

const Date: React.FC<Props> = (props) => {
  const timeStyle = css({
    fontSize: 12,
  })

  const parseDate = parseISO(props.datestring)
  const date = format(parseDate, 'yyyy/L/d')

  return (
    <time
      dateTime={props.datestring}
      css={timeStyle}
      {...props}
    >
      {date}
    </time>
  )
}

export default Date
