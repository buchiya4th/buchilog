import React from 'react'
import { css } from '@emotion/core'
import { fonts } from '@/styles/index'

type Props = {
  elementname: string
  styletype: string
  value: string
}

interface StyleType {
  [key: string]: any
}

const Typography: React.FC<Props> = (props) => {
  const ElementName = props.elementname as keyof JSX.IntrinsicElements

  const headingCommonStyle = css(
    fonts.fontHeading,
  )

  const headingStyles = {
    heading1: css(
      {
        fontSize: 24,
        lineHeight: 1.45,
      }
    ),
    heading2: css({
      fontSize: 24,
      lineHeight: 1.45,
    }),
    heading3: css({
      fontSize: 22,
      lineHeight: 1.6,
    }),
    heading4: css({
      fontSize: 20,
      lineHeight: 1.6,
    })
  }

  return (
    <ElementName
      css={[
        headingCommonStyle,
        (headingStyles as StyleType)[props.styletype]
      ]}
      {...props}
    >
      {props.value}
    </ElementName>
  )
}

export default Typography

// use
// <Typography elementname="h2" styletype="heading1" value={value} css={inheritanceStyle} />
