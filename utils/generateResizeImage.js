const fs = require("fs");
const path = require("path");
const matter = require("gray-matter");
const sharp = require("sharp");

function generateResizeImage() {
  function getAllPostFeatureImagePath() {
    const postsDirectory = path.join(process.cwd(), "posts");
    const fileNames = fs.readdirSync(postsDirectory);
    return fileNames.map((fileName) => {
      const fullPath = path.join(postsDirectory, fileName);
      const fileContents = fs.readFileSync(fullPath, "utf8");
      const matterResult = matter(fileContents);
      return matterResult.data.image;
    });
  }

  function resizeImage() {
    const imageDirectory = path.join(process.cwd(), "public/img/posts");
    const images = getAllPostFeatureImagePath();
    images.map((image) => {
      const name = image.replace(/.(jpg|png)/, "");
      const extension = image.replace(/^.*\./, "");
      const imagePath = path.join(imageDirectory, `${name}.${extension}`);
      const outputImagePath = path.join(
        imageDirectory,
        `${name}-thumb.${extension}`
      );
      sharp(imagePath)
        .resize(300, null)
        .toFile(outputImagePath)
        .catch((error) => {
          console.log(error);
        });
    });
  }
  resizeImage();
}

generateResizeImage();
