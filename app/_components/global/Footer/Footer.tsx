import React from 'react'
import FooterArea from './FooterArea'
import FooterBar from './FooterBar'
import styles from 'styles/components/global/Footer/Footer.module.scss'

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterArea />
      <FooterBar />
    </footer>
  )
}

export default Footer
