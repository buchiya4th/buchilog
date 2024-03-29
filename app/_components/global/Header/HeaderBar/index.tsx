"use client";

import Router from "next/router";
import React, { useState } from "react";
import SideNav from "@/app/_components/global/SideNav";
import { Categories, Tags } from "lib/posts";
import styles from "./HeaderBar.module.scss";

type Props = {
  categories: Categories;
  tags: Tags;
  isActiveSideNav?: boolean;
};

const HeaderBar: React.FC<Props> = ({
  categories,
  tags,
  isActiveSideNav = true,
}) => {
  const [isActive, setActive] = useState(false);
  Router.events.on("routeChangeComplete", () => setActive(false));

  return (
    <div className={styles["header-bar"]}>
      {isActiveSideNav && (
        <div
          className={
            isActive
              ? `${styles["nav-menu"]} ${styles["is-active"]}`
              : styles["nav-menu"]
          }
          onClick={() => setActive(!isActive)}
        >
          <span
            className={
              isActive ? `${styles.line} ${styles["is-active"]}` : styles.line
            }
          ></span>
          <span
            className={
              isActive ? `${styles.line} ${styles["is-active"]}` : styles.line
            }
          ></span>
          <span
            className={
              isActive ? `${styles.line} ${styles["is-active"]}` : styles.line
            }
          ></span>
        </div>
      )}
      {isActiveSideNav && (
        <SideNav categories={categories} tags={tags} activeStatus={isActive} />
      )}
    </div>
  );
};

export default HeaderBar;
