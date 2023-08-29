import React from "react";
import HomeIcon from "@/app/_components/icon/Home";
import styles from "./Breadcrumbs.module.scss";

export type Props = {
  list: (
    | {
        title: string;
        path: string;
      }
    | {
        title: string;
        path?: undefined;
      }
  )[];
};

const Breadcrumbs: React.FC<Props> = (props) => {
  return (
    <ol aria-label="breadcrumb" className={styles.breadcrumbs}>
      {props.list.map(({ title, path }, index) => (
        <li className={styles["breadcrumbs__item"]} key={index}>
          {index === 0 && (
            <>
              <span className={styles["home-icon"]}>
                <HomeIcon styles={styles.icon} />
              </span>
            </>
          )}
          {path ? (
            <a href={path}>{title}</a>
          ) : (
            <span aria-current="page">{title}</span>
          )}
        </li>
      ))}
    </ol>
  );
};

export default Breadcrumbs;
