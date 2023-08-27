import React from "react";
import styles from "./FooterBar.module.scss";

const FooterBar: React.FC = () => {
  return <div className={styles["footer-bar"]}>&copy; 2015 buchilog.com.</div>;
};

export default FooterBar;
