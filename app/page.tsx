import React from "react";
import { getAllPostsData, sortPostsData } from "@/lib/posts";
import Layout from "@/app/_components/global/Layout";
import ArticleList from "@/app/_components/organisms/ArticleList";

export default function Page(): JSX.Element {
  const allPostsData = getAllPostsData();
  const sortAllPostsData = sortPostsData(allPostsData);
  const breadcrumbs = [
    {
      title: "トップページ",
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <ArticleList articleList={sortAllPostsData} />
    </Layout>
  );
}
