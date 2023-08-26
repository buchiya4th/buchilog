import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import { notFound } from 'next/navigation'
import remark from 'remark'
import externalLinks from 'remark-external-links'
import html from 'remark-html'
import toc from 'remark-toc'
import categoryList from 'const/category.json'
import tagList from 'const/tag.json'
import headings from 'remark-autolink-headings'
import highlight from 'remark-highlight.js'
import slug from 'remark-slug'

type PostData = {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  image: string
  contentHtml: string
  thumb: string
}

type PostsData = {
  id: string
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  image: string
  thumb: string
}[]

export type Categories = {
  index: number
  slug: string
  name: string;
}[]

export type Tags = {
  slug: string
  name: string;
}[]

type MatterResultData = {
  title: string
  description: string
  date: string
  category: string
  tags: string[]
  image: string
}

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * list page
 */
export function getAllPostsData(): PostsData {
  // Get file names under /posts
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    // Remove ".md" from file name to get id
    const id = fileName.replace(/\.md$/, '')

    // Read markdown file as string
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')

    // Use gray-matter to parse the post metadata section
    const matterResult = matter(fileContents)

    const thumb = matterResult.data.image.replace(/(.+)(\.[^.]+$)/, '$1-thumb$2')

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as {
        title: string
        description: string
        date: string
        category: string
        tags: string[]
        image: string
      },
      thumb: thumb,
    }
  })
}

export function sortPostsData(data: PostsData): PostsData {
  return data.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

function confirmExistsList(list: 'category' | 'tags') {
  const allPostsData = getAllPostsData()
  const listInAllPosts = allPostsData.flatMap(post => post[list])
  const existingList = listInAllPosts.filter((x, i, self) => self.indexOf(x) === i)
  const targetList: Categories | Tags = list === 'category' ? categoryList : tagList
  const diffList = existingList.filter(tags => {
    return !targetList.some(targetTag => targetTag.name === tags)
  })
  if (diffList.length) {
    const diffStrings = diffList.join(', ')
    throw new Error(`${diffStrings} is an unset tag.`)
  }
}

export function getCategories(): Categories {
  confirmExistsList('category')

  return categoryList
}

export function getTags(): Tags {
  confirmExistsList('tags')

  const sortTagListBySlug = tagList.sort((a, b) => {
    const slugA = a.slug
    const slugB = b.slug
    if (slugA < slugB) {
      return -1;
    }
    if (slugA > slugB) {
      return 1;
    }
    return 0;
  })
  return sortTagListBySlug
}

/**
 * Related posts list
 */
export function getRelatedArticleList(currentId: string, currentPostData: PostData): PostsData {
  const ARTICLE_LIMIT = 3
  const allPostsData = getAllPostsData()
  const matchTagsData = allPostsData.filter(
    everyPostData => everyPostData.tags.find(tag => {
      return currentPostData.tags.find((targetTag: string) => {
        return targetTag === tag
      })
    })
  )
  const matchCategoryData = allPostsData.filter(
    post => post.category === currentPostData.category
  )
  const allRelatedArticleData = matchTagsData
    .concat(matchCategoryData)
    .filter((x, i, self) => self.indexOf(x) === i)
  const removeCurrentArticleData = allRelatedArticleData.filter(item => item.id !== currentId)
  const reduceLimitArticleData = removeCurrentArticleData.filter((item, index) => index < ARTICLE_LIMIT)
  return reduceLimitArticleData
}

/**
 * Post page
 */
export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  if (!fs.existsSync(fullPath)) {
    notFound()
  }
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const {
    title,
    description,
    date,
    category,
    tags,
    image
  } = matterResult.data as MatterResultData
  const processedContent = await remark()
    .use(toc, {heading: '目次', tight: true})
    .use(slug)
    .use(headings)
    .use(externalLinks, {target: '_blank', rel: ['nofollow']})
    .use(highlight)
    .use(html, {sanitize: false})
    .process(matterResult.content)
  const contentHtml = processedContent.toString()
  const thumb = image.replace(/(.+)(\.[^.]+$)/, '$1-thumb$2') as string

  return {
    title,
    description,
    date,
    category,
    tags,
    image,
    thumb,
    contentHtml
  }
}
