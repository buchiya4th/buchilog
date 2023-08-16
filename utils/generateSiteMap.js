// import fs from 'fs'
// import globby from 'globby'
const fs = require('fs')
const globby = require('globby')
const { format } = require('date-fns')
const path = require('path')
const matter = require('gray-matter')

async function generateSiteMap() {
  /**
   * Page list
  */
  const pagePaths = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/posts',
    '!src/pages/categories',
    '!src/pages/tags',
    '!src/pages/_*.tsx',
    '!src/pages/404.tsx',
    '!src/pages/api'
  ])
  const pages = pagePaths.map(pagePath => {
    const lastModTime = getLastModTime(pagePath)
    const path = pagePath.replace('src/pages', '').replace('.tsx', '')
    const url = path === '/index'
      ? process.env.NEXT_PUBLIC_DOMAIN + path.replace('.md', '').replace('/index', '')
      : process.env.NEXT_PUBLIC_DOMAIN + path.replace('.md', '')
    return formatData(url, lastModTime)
  })

  /**
   * Post list
   */
  const postPaths = await globby(['posts/*.md'])
  const posts = postPaths.map(postPath => {
    const lastModTime = getLastModTime(postPath)
    const url = process.env.NEXT_PUBLIC_DOMAIN + '/' + postPath.replace('.md', '')
    return formatData(url, lastModTime)
  })

  function getLastModTime(path) {
    const stats = fs.statSync(path)
    const lastModTime = format(stats.mtime, 'yyyy-LL-dd')
    return lastModTime
  }

  function sortData(data) {
    return data.sort((a, b) => {
      if (a.date < b.date) {
        return 1
      } else {
        return -1
      }
    })
  }

  /**
   * List page common
   */
  const postsDirectory = path.join(process.cwd(), 'posts')
  function getAllPostsData() {
    const fileNames = fs.readdirSync(postsDirectory)
    return fileNames.map(fileName => {
      const id = fileName.replace(/\.md$/, '')
      const fullPath = path.join(postsDirectory, fileName)
      const fileContents = fs.readFileSync(fullPath, 'utf8')
      const matterResult = matter(fileContents)
      return {
        id,
        ...matterResult.data
      }
    })
  }

  /**
   * Categories page
   */
  const categoriesPaths = (() => {
    const allPostsData = getAllPostsData()
    const allcategories = allPostsData.flatMap(post => {
      return {
        date: post.date,
        category: post.category,
      }
    })
    const sortAllcategories = sortData(allcategories)
    return sortAllcategories.filter((item, index, array) => {
      return array.findIndex(item2 => item.category === item2.category) === index
    })
  })()
  const categories = categoriesPaths.map(post => formatData(
    `${process.env.NEXT_PUBLIC_DOMAIN}/categories/${post.category}`,
    post.date)
  )

  /**
   * Tags page
   */
  const tagsPaths = (() => {
    const allPostsData = getAllPostsData()
    const allTags = allPostsData.flatMap(post => {
      return {
        date: post.date,
        tag: post.tags,
      }
    })
    const divideAlltags = allTags.flatMap(post => {
      return post.tag.map(tag => {
        return {
          date: post.date,
          tag: tag,
        }
      })
    })
    const sortAllTags = sortData(divideAlltags)
    return sortAllTags.filter((item, index, array) => {
      return array.findIndex(item2 => item.tag === item2.tag) === index
    })
  })()
  const tags = tagsPaths.map(post => formatData(
    `${process.env.NEXT_PUBLIC_DOMAIN}/tags/${post.tag}`,
    post.date)
  )

  /**
   * Common function
   * @param {string} loc
   * @param {string} lastMod
   * @return {Object}
   */
  function formatData(loc, lastMod) {
    return {
      loc,
      lastMod,
    }
  }

  /**
   * Array concat and generage sitemap
   */
  const urlSet = pages.concat(posts, categories, tags)

  const sitemap = `
    <?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${urlSet
        .map(page => {
          return `
            <url>
              <loc>${page.loc}</loc>
              <lastmod>${page.lastMod}</lastmod>
            </url>`
        })
        .join('')}
    </urlset>
  `

  fs.writeFileSync('public/sitemap.xml', sitemap)
}

generateSiteMap()
