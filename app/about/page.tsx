import { Metadata } from "next";
import React from "react";
import { metaData } from "@/const/metaData";
import Breadcrumbs from "@/app/_components/atoms/Breadcrumbs";
import Typography from "@/app/_components/atoms/Typography";
import Layout from "@/app/_components/global/Layout";
import styles from "./AboutPage.module.scss";

const state = {
  aboutSite: {
    heading: "このサイトについて",
    body: "フロントエンドエンジニアが、技術的な話題や書籍、公私それぞれでの学びを通じて得た知見を主なテーマとして投稿する個人ブログです。実践的な知識やスキルの解説、考えるきっかけとなる話題などを通じて役立つ情報を提供します。",
  },
  aboutAuther: {
    heading: "なかのひとについて",
    body: "フロントエンドエンジニアとして働きながら日々いろんなことを学んでいます。Webの専門学校を卒業後、Webサイトの制作や開発に従事しています。",
  },
  biography: {
    heading: "自分史",
    body: [
      {
        th: "2003年",
        td: "アコースティックギターを購入。音楽人生はここから始まった。",
      },
      { th: "2005年", td: "Web制作について学び始めた。" },
      {
        th: "2008年",
        td: "音楽活動が煮え切らず上京。新境地にて音楽修行を始めた。",
      },
      {
        th: "2013年",
        td: "人生を見つめ直し生活基盤を安定させるため『音楽 < 仕事』に比重を改め小規模なWeb制作会社へ転職した。",
      },
      {
        th: "2014年",
        td: "マークアップエンジニアとWebディレクターを兼務し制作チームリーダーとして各案件を滞りなく完遂できるよう推進していった。",
      },
      {
        th: "2015年",
        td: "Webフロントエンド領域をより深めていくべく、大企業へ転職してフロントエンドエンジニアとして従事した。",
      },
      {
        th: "2016年",
        td: "Webフロントエンドエンジニアチームのマネージャに就き、各自が自走できる体制を整え業務が円滑になるよう努めた。",
      },
      { th: "2018年", td: "家族が増え生活スタイルが激変した。" },
      {
        th: "2020年",
        td: "グローバル企業へ転職、そしてコロナ禍で生活スタイルが激変した。",
      },
      {
        th: "2022年",
        td: "仕事の方向性を見つめ直しベンチャー企業へ転職した。",
      },
    ],
  },
};

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: state.aboutSite.heading,
    description: metaData.description,
    openGraph: {
      type: "article",
      title: state.aboutSite.heading,
      description: metaData.description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/about`,
      images: [
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN}${metaData.ogpImage}`,
        },
      ],
    },
  };
}

const About: React.FC = () => {
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${state.aboutSite.heading}`,
    },
  ];

  return (
    <Layout>
      <Breadcrumbs list={breadcrumbs} />
      <article>
        <section className="aboutSite">
          <Typography
            elementname="h2"
            styletype="heading2"
            value={state.aboutSite.heading}
          />
          <div className={styles.body}>{state.aboutSite.body}</div>
        </section>
        <section className="aboutAuther">
          <Typography
            elementname="h2"
            styletype="heading2"
            value={state.aboutAuther.heading}
          />
          <div className={styles.body}>{state.aboutAuther.body}</div>
        </section>
        <section className="biography">
          <Typography
            elementname="h2"
            styletype="heading2"
            value={state.biography.heading}
          />
          <div className={styles.body}>
            <table className={styles.table}>
              <tbody>
                {state.biography.body.map(({ th, td }, index) => (
                  <tr key={index}>
                    <th>{th}</th>
                    <td>{td}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>
      </article>
    </Layout>
  );
};

export default About;
