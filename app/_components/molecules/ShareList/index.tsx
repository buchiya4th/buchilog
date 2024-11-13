"use client";

import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  XIcon,
  TwitterShareButton,
  HatenaIcon,
  HatenaShareButton,
} from "react-share";
import styles from "./ShareList.module.scss";

type Props = {
  text: string;
  url: string;
};

const Share: React.FC<Props> = (props) => {
  return (
    <ul className={styles["share__list"]}>
      <li className={styles["share__item--twitter"]}>
        <TwitterShareButton url={props.url} title={props.text}>
          <XIcon size={32} round={false} />
          <span className={styles["share-text"]}>ポスト</span>
        </TwitterShareButton>
      </li>
      <li className={styles["share__item--facebook"]}>
        <FacebookShareButton url={props.url}>
          <FacebookIcon size={32} round={false} />
          <span className={styles["share-text"]}>シェア</span>
        </FacebookShareButton>
      </li>
      <li className={styles["share__item--hatena"]}>
        <HatenaShareButton url={props.url}>
          <HatenaIcon size={32} round={false} />
          <span className={styles["share-text"]}>はてブ</span>
        </HatenaShareButton>
      </li>
    </ul>
  );
};

export default Share;
