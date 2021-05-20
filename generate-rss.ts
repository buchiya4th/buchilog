import * as fs from "fs"
const fsPromise = fs.promises
import { join } from "path"
import matter from "gray-matter"

type Post = {
  slug: string
  title: string
  description: string
  date: number
}

const metaData = {
  title: 'ぶちろぐ',
  description: 'このサイトは、Webと音楽を愛する人の提供でお送りします。',
}
const POST_URL = `${process.env.DOMAIN}/posts`
const RSS_URL = `${process.env.DOMAIN}/feed.xml`
const postDirPath = join(process.cwd(), "_posts")
const outputPostDirPath = join(process.cwd(), "out/posts")

export const getPost = async (slug: string) => {
  const fullPath = join(postDirPath, `${slug}.md`)
  const fileContents = await fsPromise.readFile(fullPath, "utf8")
  const { data } = matter(fileContents)

  const post: Post = {
    slug: slug,
    title: data["title"],
    description: data["description"],
    date: Date.parse(data["date"]),
  }

  return post
}

const getAllPosts = async () => {
  const filenames = await fsPromise.readdir(outputPostDirPath)
  const slugs = filenames.map((filename) => filename.replace(/\.html$/, ""))
  const promisePosts = slugs.map(async (filename) => await getPost(filename))
  const posts = await Promise.all(promisePosts)
  posts.sort((a, b) => b.date - a.date)

  return posts
}

const createFeed = (post: Post) => `    <item>
      <title>${post.title}</title>
      <link>${POST_URL}/${post.slug}</link>
      <guid>${POST_URL}/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.description}</description>
    </item>`

const writeRss = async (filePath: string, content: string) => {
  try {
    await fsPromise.writeFile(filePath, content, "utf-8")
  } catch (err) {
    console.error(err)
  }
}

const generateRss = async () => {
  const posts = await getAllPosts()
  const lastBuildDate = new Date(posts.slice(-1)[0].date).toUTCString()
  const feeds = posts.map((post) => createFeed(post))

  const rss = `<?xml version="1.0" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${metaData.title}</title>
    <link>${process.env.DOMAIN}</link>
    <description>${metaData.description}</description>
    <language>ja</language>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <atom:link href="${RSS_URL}" rel="self" type="application/rss+xml" />
${feeds.join("\n")}
  </channel>
</rss>`

  const filePath = join(process.cwd(), "out/feed.xml")

  await writeRss(filePath, rss)
}

generateRss()