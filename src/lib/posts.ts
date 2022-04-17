import fs from "fs";
import { join } from "path";
import matter from "gray-matter";
import markdownToHtml from "./markdownToHtml";
import { getAmazonInfo } from "../pages/api/amazon";
import {
  generateAmazonLink,
  generateAmazonLinkStyle,
} from "../utils/amazonLinkStyle";

const postsDirectory = join(process.cwd(), "src/_posts");
const getPostSlugs = () => {
  return fs.readdirSync(postsDirectory);
};

const getAllPosts = (): PostOverview[] => {
  const allPostsSlug = getPostSlugs();

  const postsOverViewList = allPostsSlug
    .map((postSlug) => {
      const slug = postSlug.replace(".md", "");
      const markdownResult = matterPost(slug);
      const postOverView: MatterData = markdownResult.data as MatterData;
      const title = postOverView.title;
      const tags = postOverView.tags.split(",");
      const date = JSON.parse(JSON.stringify(postOverView.date));
      const coverImage = postOverView.coverImage;
      const isPublic = postOverView.isPublic;

      return {
        title,
        tags,
        date,
        coverImage,
        isPublic,
        slug,
      };
    })
    .filter((result) => result.isPublic)
    .sort((a, b) => {
      return a.date < b.date ? 1 : -1;
    });
  return postsOverViewList;
};

const getPreviewAndNextLink = (slug: string): PreviewAndNextLink => {
  const returnObj = { preview: {}, next: {} };
  const allPostsSlug = getAllPosts();
  const postIndex = () => {
    let returnIndex = 0;
    allPostsSlug.forEach((value, index) => {
      if (value.slug === slug) {
        returnIndex = index;
      }
    });
    return returnIndex;
  };

  const getLink = (slug: string) => {
    const markdownResult = matterPost(slug);
    const postOverView: MatterData = markdownResult.data as MatterData;
    const title = postOverView.title;
    const postInfo = {
      title: title,
      slug: slug,
    };
    return postInfo;
  };
  if (allPostsSlug[postIndex() + 1]) {
    const postSlug = allPostsSlug[postIndex() + 1].slug;
    returnObj["preview"] = getLink(postSlug);
  }
  if (allPostsSlug[postIndex() - 1]) {
    const postSlug = allPostsSlug[postIndex() - 1].slug;
    returnObj["next"] = getLink(postSlug);
  }

  return returnObj;
};

const getPostsStaticPagePaths = (): { params: { slug: string } }[] => {
  const dirNames = getPostSlugs();
  return dirNames.map((dirName) => ({
    params: {
      slug: dirName.replace(".md", ""),
    },
  }));
};

const matterPost = (slug: string): matter.GrayMatterFile<string> => {
  const fullPath = join(postsDirectory, `${slug}.md`);
  const postMarkdown = fs.readFileSync(fullPath, "utf8");
  return matter(postMarkdown);
};

const getPost = async (slug: string): Promise<Post> => {
  const markdownResult = matterPost(slug);
  const postOverView: MatterData = markdownResult.data as MatterData;
  const beforeConvertContent = await markdownToHtml(markdownResult.content);
  const content = await executeConvertContentAmazonLink(beforeConvertContent);
  const title = postOverView.title;
  const tags = postOverView.tags.split(",");
  const date = JSON.parse(JSON.stringify(postOverView.date));
  const coverImage = postOverView.coverImage;
  return {
    title,
    tags,
    date,
    coverImage,
    content,
    slug,
  };
};

const convertContentAmazonLink = async (content: string) => {
  const beforeRegex = new RegExp("https://www.amazon.co.jp/.*(?=</p>)");
  const getAsinMatch = new RegExp("(?<=dp/)([A-Z0-9]{10})");
  let newContent = "";
  //@ts-ignore
  const beforeAmazonUrl = content.match(beforeRegex)[0];
  console.log(beforeAmazonUrl, "beforeAmazonUrl");
  //@ts-ignore
  const asin = beforeAmazonUrl.match(getAsinMatch)[0] as string;
  const { productTitle, productPrice, dateFormat } = (await getAmazonInfo(
    beforeAmazonUrl
  )) as Record<string, string>;
  const amazonUrl = generateAmazonLink(asin);
  const resultAmazonLinkStyle = generateAmazonLinkStyle(
    amazonUrl,
    productTitle,
    productPrice,
    asin,
    dateFormat
  );
  newContent = content.replace(beforeAmazonUrl, resultAmazonLinkStyle);
  return newContent;
};

const executeConvertContentAmazonLink = async (content: string) => {
  let returnTitle = content;
  const beforeRegex = new RegExp("https://www.amazon.co.jp/.*(?=</p>)");
  const afterRegex = new RegExp('href="https://www.amazon.co.jp/');
  const getAsinMatch = new RegExp("(?<=dp/)([A-Z0-9]{10})");
  //@ts-ignore
  while (
    returnTitle.match(beforeRegex) &&
    //@ts-ignore
    !afterRegex.test(returnTitle.match(beforeRegex)[0])
  ) {
    returnTitle = await convertContentAmazonLink(returnTitle);
  }
  return returnTitle;
};

export { getAllPosts, getPost, getPostsStaticPagePaths, getPreviewAndNextLink };
