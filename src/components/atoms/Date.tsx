import React from 'react'
import { parseISO, format } from 'date-fns'
import { css } from '@emotion/core'

type Props = {
  datestring: string
}

const Date: React.FC<Props> = (props) => {
  const date = parseISO(props.datestring)

  const timeStyle = css({
    fontSize: 12,
  })

  return <time dateTime={props.datestring} css={timeStyle} {...props}>{format(date, 'yyyy年L月d日')}</time>
}

export default Date
