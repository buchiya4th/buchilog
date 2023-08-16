import React from 'react'
import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { metaData } from '@/const/metaData'
import { getAllPostsData, sortPostsData } from '@/lib/posts'
import ArticleList from '@/app/_components/organisms/ArticleList'
import Breadcrumbs from '@/app/_components/atoms/Breadcrumbs'
import Layout from '@/app/_components/global/Layout'

type MetadataProps = {
  params: { id: string }
}

type Params = {
  params: {
    id: string
  }
}

export async function generateMetadata({ params }: MetadataProps): Promise<Metadata> {
  const id = decodeURI(params.id)
  const title = id
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
  const id = decodeURI(params.id)
  const allPostsData = getAllPostsData()
  const tagsPostsData = allPostsData.filter(postData => {
    return postData.tags.find(tag => tag === id)
  })
  if (!tagsPostsData.length) {
    notFound()
  }

  const sortTagsPostsData = sortPostsData(tagsPostsData)
  const breadcrumbs = [
    {
      title: "トップページ",
      path: "/",
    },
    {
      title: `${id}`,
    },
  ]

  return (
    <Layout>
      <Breadcrumbs list={breadcrumbs} />
      <ArticleList articleList={sortTagsPostsData} />
    </Layout>
  )
}
