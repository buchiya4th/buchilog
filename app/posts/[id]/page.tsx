import { Metadata } from "next";
import React from "react";
import { getPostData, getRelatedArticleList } from "@/lib/posts";
import "highlight.js/styles/monokai.css";
import Breadcrumbs from "@/app/_components/atoms/Breadcrumbs";
import Date from "@/app/_components/atoms/Date";
import Typography from "@/app/_components/atoms/Typography";
import Layout from "@/app/_components/global/Layout";
import LinkList from "@/app/_components/molecules/LinkList";
import Share from "@/app/_components/molecules/Share";
import ArticleList from "@/app/_components/organisms/ArticleList";
import categoryList from "const/category.json";
import tagList from "const/tag.json";
import styles from "./posts.module.scss";

type MetadataProps = {
  params: { id: string };
};

type Params = {
  params: {
    id: string;
  };
};

export async function generateMetadata({
  params,
}: MetadataProps): Promise<Metadata> {
  const id = params.id;
  const postData = await getPostData(id);
  const { title, description, image } = postData;
  return {
    title: title,
    description: description,
    openGraph: {
      type: "article",
      title: title,
      description: description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN}/img/posts/${image}`,
        },
      ],
    },
  };
}

export default async function Page({ params }: Params): Promise<JSX.Element> {
  const id = params.id;
  const postData = await getPostData(id);
  const category = categoryList.filter(
    (category) => category.name === postData.category
  )[0];
  const tags = tagList.filter((tag) => postData.tags.includes(tag.name));
  const relatedArticleData = await getRelatedArticleList(id, postData);
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${category.name}`,
      path: `/categories/${category.slug}`,
    },
    {
      title: `${postData.title}`,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs list={breadcrumbs} />
      <article id="article">
        <div className={styles.data}>
          <Date datestring={postData.date} />
          <LinkList items={[category]} itemName="categories" />
        </div>
        <h1 className={styles.title}>{postData.title}</h1>
        {postData.image && (
          <img
            src={`/img/posts/${postData.image}`}
            width="800"
            height="480"
            alt={postData.title}
          />
        )}
        <div
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
        />
        <LinkList items={tags} itemName="tags" />
        <div className={styles["share-area"]}>
          <Share
            text={postData.title}
            url={`${process.env.NEXT_PUBLIC_DOMAIN}/posts/${id}`}
          />
        </div>
      </article>
      <div>
        <Typography
          elementname="h2"
          styletype="heading2"
          value="関連記事"
          styles={styles["related-article-heading"]}
        />
        <ArticleList articleList={relatedArticleData} />
      </div>
    </Layout>
  );
}
