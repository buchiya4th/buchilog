import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { metaData } from '@/const/metaData'
import { getAllPostsData, sortPostsData } from '@/lib/posts'
import ArticleList from '@/app/_components/organisms/ArticleList'
import Breadcrumbs from '@/app/_components/atoms/Breadcrumbs'
import Layout from '@/app/_components/global/Layout'
import categoryList from 'const/category.json'

type MetadataProps = {
  params: { id: string }
}

type Params = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const category = categoryList.filter(category => category.slug === params.id)[0]
  const title = category.name
  const id = category.slug
  return {
    title: title,
    description: metaData.description,
    openGraph: {
      type: 'article',
      title: title,
      description: metaData.description,
      url: `${process.env.NEXT_PUBLIC_DOMAIN}/categories/${id}`,
      images: [{
        url: `${process.env.NEXT_PUBLIC_DOMAIN}${metaData.ogpImage}`
      }]
    }
  }
}

export default function Page({ params }: Params): JSX.Element {
  const category = categoryList.filter(category => category.slug === params.id)[0]
  const title = category.name
  const allPostsData = getAllPostsData()
  const categoryPostsData = allPostsData.filter(postData => {
    return postData.category === title
  })
  if (!categoryPostsData.length) {
    notFound()
  }
  const sortCategoryPostData = sortPostsData(categoryPostsData)
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${title}`,
    },
  ]

  return (
    <Layout>
      <Breadcrumbs list={breadcrumbs} />
      <ArticleList articleList={sortCategoryPostData} />
    </Layout>
  )
}
