import { Metadata } from "next";
import { notFound } from "next/navigation";
import React from "react";
import { getAllPostsData, sortPostsData } from "@/lib/posts";
import { metaData } from "@/const/metaData";
import Layout from "@/app/_components/global/Layout";
import ArticleList from "@/app/_components/organisms/ArticleList";
import categoryList from "const/category.json";

type MetadataProps = {
  params: Promise<{ id: string }>;
};

type Params = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateMetadata(
  props: MetadataProps
): Promise<Metadata> {
  const params = await props.params;
  const category = categoryList.filter(
    (category) => category.slug === params.id
  )[0];
  const title = category.name;
  const id = category.slug;
  return {
    title: title,
    description: metaData.description,
    openGraph: {
      type: "article",
      title: title,
      description: metaData.description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/categories/${id}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN}${metaData.ogpImage}`,
        },
      ],
    },
  };
}

export default async function Page(props: Params): Promise<JSX.Element> {
  const params = await props.params;
  const category = categoryList.filter(
    (category) => category.slug === params.id
  )[0];
  const title = category.name;
  const allPostsData = getAllPostsData();
  const categoryPostsData = allPostsData.filter((postData) => {
    return postData.category === title;
  });
  if (!categoryPostsData.length) {
    notFound();
  }
  const sortCategoryPostData = sortPostsData(categoryPostsData);
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${title}`,
    },
  ];

  return (
    <Layout breadcrumbs={breadcrumbs}>
      <ArticleList articleList={sortCategoryPostData} />
    </Layout>
  );
}
