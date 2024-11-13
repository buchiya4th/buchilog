import React from "react";
import { getCategories, getTags } from "@/lib/posts";
import AdsContentBottom from "@/app/_components/atoms/AdsContentBottom";
import Breadcrumbs, {
  Props as BreadcrumbsProps,
} from "@/app/_components/atoms/Breadcrumbs";
import Footer from "@/app/_components/global/Footer";
import Header from "@/app/_components/global/Header/Header";
import styles from "./Layout.module.scss";
import type { Metadata } from "next";

type Props = {
  children: React.ReactNode;
  home?: boolean;
  breadcrumbs: BreadcrumbsProps["list"];
};

export const metadata: Metadata = {
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

const Layout: React.FC<Props> = (props) => {
  const categories = getCategories();
  const tags = getTags();

  return (
    <div className={styles.wrap}>
      <Header categories={categories} tags={tags} />
      <main className={styles.main}>
        <Breadcrumbs list={props.breadcrumbs} />
        {props.children}
        <AdsContentBottom />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
