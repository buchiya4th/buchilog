import React from 'react'
import { parseISO, format } from 'date-fns'
import { css } from '@emotion/core'
import { colors } from '@/styles/index'

type Props = {
  datestring: string
}

const Date: React.FC<Props> = (props) => {
  const date = parseISO(props.datestring)

  const timeStyle = css({
    fontSize: 12,
    color: colors.accent.main,
  })

  return <time dateTime={props.datestring} css={timeStyle} {...props}>{format(date, 'yyyy年L月d日')}</time>
}

export default Date
