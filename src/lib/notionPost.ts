import { Client } from '@notionhq/client';
import {
  GetPageResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { PostOverview } from '../types/type';

const notion = new Client({
  auth: process.env.NOTION_SECRET_KEY,
});

const convertPageResponseToPost = (
  pageResponse: PageObjectResponse | GetPageResponse,
) => {
  const post: PostOverview = {} as PostOverview;
  // @ts-ignore
  const d = pageResponse.properties;
  const pageId = pageResponse.id;
  console.log(process.env.NODE_ENV);
  if (
    process.env.NODE_ENV === 'development' &&
    !d.isDraft.checkbox &&
    !d.isPublic.checkbox
  )
    return null;
  if (process.env.NODE_ENV === 'production' && d.isPublic.checkbox === false)
    return null;
  // @ts-ignore
  post.title = d.title.title
    .map((t: { plain_text: any }) => t.plain_text)
    .join('');
  // @ts-ignore
  post.date = d.date.date.start;
  // @ts-ignore
  post.coverImage = d.ogp.files.length > 0 ? d.ogp.files[0].file.url : [];
  post.slug = pageId;

  return post;
};

export const getAllPosts = async () => {
  const response = await notion.databases.query({
    database_id: process.env.NOTION_DATABASE_ID!,
  });

  const { results } = response;

  const posts: PostOverview[] = results
    .map((r) => {
      const post = convertPageResponseToPost(r);
      if (!post) return;
      return post;
    })
    .filter((p) => p !== undefined) as PostOverview[];

  console.log(posts);

  return posts;
};

export const getPage = async (pageId: string) => {
  const pageResponse = await notion.pages.retrieve({
    page_id: pageId,
  });

  const post = convertPageResponseToPost(pageResponse);
  const response = await notion.blocks.children.list({
    block_id: pageId,
    page_size: 50,
  });

  return { content: response.results!, post: post! };
};

export const getPostsStaticPagePaths = async () => {
  const posts = await getAllPosts();
  const paths = posts.map((post) => ({
    params: {
      slug: post.slug,
    },
  }));
  return paths;
};
