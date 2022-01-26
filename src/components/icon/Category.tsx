import React from 'react'
import styles from 'styles/components/icon/Category.module.scss'

type Props = {
  styles?: React.ReactNode
}

const Tag: React.FC<Props> = (props) => {
  return (
    <svg
      className={`${styles.svg} ${props.styles}`}
      version="1.1"
      id="_x32_"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 512 512"
      xmlSpace="preserve"
    >
      <g>
        <path
          className={styles.path}
          d="M465.929,121.035H249.246c-25.444,0-46.071-20.627-46.071-46.071v-3.644c0-25.444-20.627-46.071-46.071-46.071
          H46.071C20.627,25.25,0,45.877,0,71.321v49.714v49.342v270.302c0,25.444,20.627,46.071,46.071,46.071h419.858
          c25.444,0,46.071-20.627,46.071-46.071V167.107C512,141.663,491.373,121.035,465.929,121.035z"
        />
      </g>
    </svg>
  )
}

export default Tag
