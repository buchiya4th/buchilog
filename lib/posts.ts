import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import toc from 'remark-toc'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import externalLinks from 'remark-external-links'
import highlight from 'remark-highlight.js'
import html from 'remark-html'

type Props = {
  id: string
  contentHtml: string
}

type PostsData = {
  id: string
  date: string
  title: string
  category: string
  tags: [string]
}[]

type AllPostId = {
  params: {
    id: string
  }
}[]

const postsDirectory = path.join(process.cwd(), 'posts')

/**
 * list page
 */
function getAllPostsData() {
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
        date: string
        title: string
        category: string
        tags: [string]
      },
      thumb: thumb,
    }
  })
}

/**
 * index page
 */
export function getSortedAllPostsData(): PostsData {
  const allPostsData = getAllPostsData()
  return sortPostsData(allPostsData)
}

/**
 * tags page
 */
export function getSortedTagsPostsData(id: string): PostsData {
  const allPostsData = getAllPostsData()
  const tagsPostsData = allPostsData.filter(postData => {
    return postData.tags.find(tag => tag === id)
  })
  return sortPostsData(tagsPostsData)
}

function sortPostsData(data: PostsData) {
  return data.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export function getTags(): React.ReactNode {
  const allPostsData = getAllPostsData()
  const tags = allPostsData.flatMap(post => post.tags)
  return tags.filter((x, i, self) => self.indexOf(x) === i)
}

/**
 * categories page
 */
export function getSortedCategoryPostsData(id: string): PostsData {
  const allPostsData = getAllPostsData()
  const categoryPostsData = allPostsData.filter(postData => postData.category === id)
  return sortPostsData(categoryPostsData)
}

export function getCategories(): React.ReactNode {
  const allPostsData = getAllPostsData()
  const category = allPostsData.flatMap(post => post.category)
  return category.filter((x, i, self) => self.indexOf(x) === i)
}

/**
 * Post page
 */
export function getAllPostIds(): AllPostId {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
}

/**
 * Related posts list
 */
export function getRelatedArticleList(postData: any): PostsData {
  const ARTICLE_LIMIT = 3
  const allPostsData = getAllPostsData()
  const matchTagsData = allPostsData.filter(
    post => post.tags.find(tag => {
      return postData.tags.find((targetTag: string) => { return targetTag === tag })
    })
  )
  const matchCategoryData = allPostsData.filter(
    post => post.category === postData.category
  )
  const allRelatedArticleData = matchTagsData
    .concat(matchCategoryData)
    .filter((x, i, self) => self.indexOf(x) === i)
  const removeCurrentArticleData = allRelatedArticleData.filter(item => item.id !== postData.id)
  const reduceLimitArticleData = removeCurrentArticleData.filter((item, index) => index < ARTICLE_LIMIT)
  return reduceLimitArticleData
}

export async function getPostData(id: string): Promise<Props> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')

  const matterResult = matter(fileContents)

  const processedContent = await remark()
    .use(toc, {heading: '目次', tight: true})
    .use(slug)
    .use(headings)
    .use(externalLinks, {target: '_blank', rel: ['nofollow']})
    .use(highlight)
    .use(html, {sanitize: false})
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
