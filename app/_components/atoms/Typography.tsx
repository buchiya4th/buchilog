import React from 'react'
import styles from './Typography.module.scss'

type Props = {
  elementname: string
  styletype: string
  value: string
  styles?: React.ReactNode
}

const Typography: React.FC<Props> = (props) => {
  const ElementName = props.elementname as keyof JSX.IntrinsicElements

  return (
    <ElementName className={`${styles[props.styletype]} ${props.styles}`}>
      {props.value}
    </ElementName>
  )
}

export default Typography

// use
// <Typography elementname="h2" styletype="heading2" value={value} css={inheritanceStyle} />
