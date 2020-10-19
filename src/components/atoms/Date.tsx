import React from 'react'
import { parseISO, format } from 'date-fns'
import { css } from '@emotion/core'

type Props = {
  datestring: string
}

const Date: React.FC<Props> = (props) => {
  const parseDate = parseISO(props.datestring)
  const date = format(parseDate, 'yyyy/L/d')

  const timeStyle = css({
    fontSize: 12,
  })

  return <time dateTime={props.datestring} css={timeStyle} {...props}>{date}</time>
}

export default Date
