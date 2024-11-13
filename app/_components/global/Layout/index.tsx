import Head from "next/head";
import React from "react";
import { getCategories, getTags } from "@/lib/posts";
import AdsContentBottom from "@/app/_components/atoms/AdsContentBottom";
import Breadcrumbs, {
  Props as BreadcrumbsProps,
} from "@/app/_components/atoms/Breadcrumbs";
import Footer from "@/app/_components/global/Footer";
import Header from "@/app/_components/global/Header/Header";
import styles from "./Layout.module.scss";

type Props = {
  children: React.ReactNode;
  home?: boolean;
  breadcrumbs: BreadcrumbsProps["list"];
};

const Layout: React.FC<Props> = (props) => {
  const categories = getCategories();
  const tags = getTags();

  return (
    <div className={styles.wrap}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>

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
