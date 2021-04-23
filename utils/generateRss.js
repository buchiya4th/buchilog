const fs = require('fs')
const path = require('path')
const matter = require('gray-matter')
const fsPromise = fs.promises

const metaData = {
  title: 'ぶちろぐ',
  description: 'このサイトは、Webと音楽を愛する人の提供でお送りします。',
}
const POST_URL = `${process.env.DOMAIN}/posts`
const RSS_URL = `${process.env.DOMAIN}/rss.xml`
const postDirPath = path.join(process.cwd(), "posts")
const outputPostDirPath = path.join(process.cwd(), "out/posts")

const getPost = async (slug) => {
  const fullPath = path.join(postDirPath, `${slug}.md`)
  const fileContents = await fsPromise.readFile(fullPath, "utf8")
  const { data } = matter(fileContents)

  const post = {
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

const createFeed = (post) => `    <item>
      <title>${post.title}</title>
      <link>${POST_URL}/${post.slug}</link>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <description>${post.description}</description>
    </item>`

const writeRss = async (filePath, content) => {
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

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0"
  xmlns:content="http://purl.org/rss/1.0/modules/content/"
  xmlns:wfw="http://wellformedweb.org/CommentAPI/"
  xmlns:dc="http://purl.org/dc/elements/1.1/"
  xmlns:atom="http://www.w3.org/2005/Atom"
  xmlns:sy="http://purl.org/rss/1.0/modules/syndication/"
  xmlns:slash="http://purl.org/rss/1.0/modules/slash/"
  xmlns:georss="http://www.georss.org/georss"
  xmlns:geo="http://www.w3.org/2003/01/geo/wgs84_pos#"
>
  <channel>
    <title>${metaData.title}</title>
    <atom:link href="${RSS_URL}" rel="self" type="application/rss+xml" />
    <link>${process.env.DOMAIN}</link>
    <description>${metaData.description}</description>
    <lastBuildDate>${lastBuildDate}</lastBuildDate>
    <language>ja</language>
    <sy:updatePeriod>hourly</sy:updatePeriod>
    <sy:updateFrequency>1</sy:updateFrequency>
    <generator>https://wordpress.org/?v=5.1.1</generator>
${feeds.join("\n")}
  </channel>
</rss>`

  const filePath = path.join(process.cwd(), "out/rss.xml")

  await writeRss(filePath, rss)
}

generateRss()
