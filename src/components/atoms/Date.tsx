import React from 'react'
import { parseISO, format } from 'date-fns'
import { css } from '@emotion/core'
import { size, media } from '@/styles/index'

type Props = {
  datestring: string
}

const Date: React.FC<Props> = (props) => {
  const timeStyle = css({
    fontSize: size(1.25),
    [media.up('tablet')]: {
      fontSize: size(1.5),
    },
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
