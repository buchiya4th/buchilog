const fs = require("fs");
const { join } = require("path");
const { Feed } = require("feed");
const matter = require("gray-matter");
const fsPromise = fs.promises;

const postDirPath = join(process.cwd(), "posts");

async function getPost(slug) {
  const fullPath = join(postDirPath, `${slug}.md`);
  const fileContents = await fsPromise.readFile(fullPath, "utf8");
  const { data } = matter(fileContents);

  const post = {
    slug: slug,
    title: data["title"],
    description: data["description"],
    date: Date.parse(data["date"]),
  };

  return post;
}

async function getBlogPostsData() {
  const DIR = join(process.cwd(), "posts");
  const files = fs.readdirSync(DIR).filter((file) => file.endsWith(".md"));
  const slugs = files.map((filename) => filename.replace(/\.md$/, ""));
  const promisePosts = slugs.map(async (filename) => await getPost(filename));
  const posts = await Promise.all(promisePosts);
  posts.sort((a, b) => b.date - a.date);

  return posts;
}

async function generateRssFeed() {
  const posts = await getBlogPostsData();
  const siteURL = "https://buchilog.com";
  const date = new Date();
  const author = {
    name: "buchiya4th",
    email: "buchiya4th@gmail.com",
    link: "https://twitter.com/buchiya4th",
  };
  const metaData = {
    title: "ぶちろぐ",
    description: "このサイトは、学びと共に生きる人の提供でお送りします。",
  };
  const feed = new Feed({
    title: metaData.title,
    description: metaData.description,
    id: siteURL,
    link: siteURL,
    image: `${siteURL}/img/logo.svg`,
    favicon: `${siteURL}/favicon.ico`,
    copyright: "© 2015 buchilog.com.",
    updated: date,
    generator: "Feed for Node.js",
    feedLinks: {
      rss2: `${siteURL}/rss/feed.xml`,
      json: `${siteURL}/rss/feed.json`,
      atom: `${siteURL}/rss/atom.xml`,
    },
    author,
  });

  posts.forEach((post) => {
    const url = `${siteURL}/posts/${post.slug}`;

    feed.addItem({
      title: post.title,
      id: url,
      link: url,
      description: post.description,
      content: post.description,
      author: [author],
      contributor: [author],
      date: new Date(post.date),
    });
  });

  fs.mkdirSync("public/rss", { recursive: true });
  fs.writeFileSync("public/rss/feed.xml", feed.rss2());
  fs.writeFileSync("public/rss/atom.xml", feed.atom1());
  fs.writeFileSync("public/rss/feed.json", feed.json1());
}

generateRssFeed();
