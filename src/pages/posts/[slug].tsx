import { GetStaticPaths, GetStaticProps } from 'next';
import Layout from '../../components/Layout';
import { NextSeo } from 'next-seo';
import Image from 'next/image';
import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import NotionPost from '../../components/NotionPost';
import { getPage, getPostsStaticPagePaths } from '../../lib/notionPost';

type StaticProps = {
  content: (PartialBlockObjectResponse | BlockObjectResponse)[] | null;
  post: PostOverview;
};

type Props = StaticProps & {
  children?: never;
};

const Post: React.FC<Props> = ({ content, post }: StaticProps) => {
  return (
    <>
      <NextSeo
        title={post.title}
        description={post.title}
        openGraph={{
          title: post.title,
          description: post.title,
          type: 'website',
          url: `https://aono.dev/post/${post.slug}`,
          site_name: 'SiteName',
          images: [
            {
              url: `${post.coverImage}`,
              width: 700,
              height: 393,
              alt: 'Og Image Alt',
              type: 'image/jpeg',
            },
          ],
        }}
        twitter={{
          handle: '@piesuke727',
          site: 'https://aono.dev',
          cardType: 'summary_large_image',
        }}
      />
      <Layout>
        <div className="max-w-[700px]  h-[193px] md:h-[343px] relative flex justify-center">
          <Image
            src={post.coverImage}
            alt="カバー画像"
            className="aspect-video"
            layout="fill"
            objectFit="contain"
          />
        </div>
        <div className="mt-4 mb-12">
          <div className="text-4xl font-bold mt-3 mb-2 bottom-1 border-grey-300">
            <h1>{post.title}</h1>
          </div>
        </div>
        <NotionPost results={content!} />
      </Layout>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = await getPostsStaticPagePaths();
  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}) => {
  const { content, post } = await getPage(params?.slug as string);
  //   const previewAndNextLink: PreviewAndNextLink = getPreviewAndNextLink(
  //     params?.slug as string
  //   );
  return {
    props: {
      content,
      post,
      //   previewAndNextLink,
    },
  };
};

export default Post;
