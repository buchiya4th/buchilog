import Link from "next/link";
import React from "react";
import Date from "@/app/_components/atoms/Date";
import styles from "./ArticleList.module.scss";

type Props = {
  articleList: {
    date: string;
    title: string;
    id: string;
    thumb: string;
  }[];
};

const ArticleListItem: React.FC<Props> = (props) => {
  return (
    <ul className={styles["article-list"]}>
      {props.articleList.map(({ id, date, title, thumb }) => (
        <li key={id}>
          <div className={styles.image}>
            <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
              <img
                src={`/img/posts/${thumb}`}
                width="136"
                height="82"
                alt={title}
              />
            </Link>
          </div>
          <div className={styles.title}>
            <Link href="/posts/[id]" as={`/posts/${id}`} passHref>
              {title}
            </Link>
          </div>
          <div className={styles.data}>
            <span className={styles.date}>
              <Date datestring={date} />
            </span>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default ArticleListItem;
