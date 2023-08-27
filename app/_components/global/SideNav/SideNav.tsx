import React from "react";
import LinkList from "@/app/_components/molecules/LinkList";
import { Categories, Tags } from "lib/posts";
import styles from "./SideNav.module.scss";

type Props = {
  categories: Categories;
  tags: Tags;
  activeStatus?: boolean;
};

const SideNav: React.FC<Props> = (props) => {
  return (
    <div
      className={
        props.activeStatus
          ? `${styles["side-nav"]} ${styles["is-active"]}`
          : styles["side-nav"]
      }
    >
      <LinkList
        items={props.categories}
        itemName="categories"
        iconStyles={styles["link-list__icon"]}
        itemStyles={styles["link-list__text"]}
      />
      <LinkList
        items={props.tags}
        itemName="tags"
        iconStyles={styles["link-list__icon"]}
        itemStyles={styles["link-list__text"]}
      />
    </div>
  );
};

export default SideNav;
