import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import remark from 'remark'
import toc from 'remark-toc'
import slug from 'remark-slug'
import headings from 'remark-autolink-headings'
import externalLinks from 'remark-external-links'
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

    // Combine the data with the id
    return {
      id,
      ...matterResult.data as {
        date: string
        title: string
        category: string
        tags: [string]
      }
    }
  })
}

/**
 * index page
 */
export function getSortedAllPostsData(): React.ReactNode {
  const allPostsData = getAllPostsData()
  return sortPostsData(allPostsData)
}

/**
 * tags page
 */
export function getSortedTagsPostsData(id: string): React.ReactNode {
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
 * Post page
 */
export function getAllPostIds() {
  const fileNames = fs.readdirSync(postsDirectory)
  return fileNames.map(fileName => {
    return {
      params: {
        id: fileName.replace(/\.md$/, '')
      }
    }
  })
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
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    contentHtml,
    ...matterResult.data
  }
}
