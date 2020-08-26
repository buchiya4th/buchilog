import React from 'react'
import classnames from 'classnames'
import styles from '@/src/components/single-instance/SideNav.module.scss'

type Props = {
  activeStatus?: boolean
}

const SideNav: React.FC<Props> = (props) => {
  return (
    <div className={classnames(styles.sideNav, { [styles['is-active']]: props.activeStatus })}>
      <div className={styles.sideNav_searchForm}>search form</div>
      <div className={styles.sideNav_category}>category</div>
      <div className={styles.sideNav_tag}>tag</div>
    </div>
  )
}

export default SideNav