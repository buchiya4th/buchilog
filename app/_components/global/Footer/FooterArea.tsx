import Link from "next/link";
import React from "react";
import Typography from "@/app/_components/atoms/Typography";
import styles from "./FooterArea.module.scss";

const FooterArea: React.FC = () => {
  return (
    <div className={styles["footer-area"]}>
      <div className={styles["footer-profile"]}>
        <Typography
          elementname="div"
          styletype="heading4"
          value="このサイトについて"
          styles={styles["profile-title"]}
        />
        <div className={styles["profile-icon"]}>
          <Link href="/about/">
            <img
              src="/img/profileIcon.svg"
              width={48}
              height={60.75}
              alt="ぶちや"
            />
          </Link>
          <div className={styles["profile-name"]}>ぶちや</div>
        </div>
        <div className={styles["profile-text"]}>
          <div>
            フロントエンドエンジニアが、技術的な話題や書籍、公私それぞれでの学びを通じて得た知見を主なテーマとして投稿する個人ブログです。実践的な知識やスキルの解説、考えるきっかけとなる話題などを通じて役立つ情報を提供します。
          </div>
          <div className={styles["profile-detail-link"]}>
            <Link href="/about/">詳しく見る &gt;</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FooterArea;
