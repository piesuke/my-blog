import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import PostsAll from '../components/PostsAll';
import { getAllPosts } from '../lib/notionPost';

type StaticProps = {
  posts: PostOverview[];
};

type Props = StaticProps & {
  children?: never;
};

const Index: React.FC<Props> = ({ posts, children }) => {
  return (
    <Layout>
      <PostsAll postsOverViews={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async ({
  params,
}) => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Index;
