// import fs from 'fs'
// import globby from 'globby'
const fs = require('fs')
const globby = require('globby')
const { format } = require('date-fns')

async function generateSiteMap() {
  // page list
  const pagePaths = await globby([
    'src/pages/**/*.tsx',
    '!src/pages/posts',
    '!src/pages/_*.tsx',
    '!src/pages/404.tsx',
    '!src/pages/api'
  ])
  const pages = pagePaths.map(pagePath => {
    const lastModTime = getLastModTime(pagePath)
    const path = pagePath.replace('src/pages', '').replace('.tsx', '')
    const url = path === '/index'
      ? process.env.DOMAIN + path.replace('.md', '').replace('/index', '')
      : process.env.DOMAIN + path.replace('.md', '')
    return {
      loc: url,
      lastMod: lastModTime
    }
  })

  // post list
  const postPaths = await globby(['posts/*.md'])
  const posts = postPaths.map(postPath => {
    const lastModTime = getLastModTime(postPath)
    const url = process.env.DOMAIN + '/' + postPath.replace('.md', '')
    return {
      loc: url,
      lastMod: lastModTime
    }
  })

  function getLastModTime(path) {
    const stats = fs.statSync(path)
    const lastModTime = format(stats.mtime, 'yyyy-LL-dd')
    return lastModTime
  }

  const urlSet = pages.concat(posts)

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
