import React from "react";
import styles from "./Footer.module.scss";
import FooterArea from "./FooterArea";
import FooterBar from "./FooterBar";

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <FooterArea />
      <FooterBar />
    </footer>
  );
};

export default Footer;
