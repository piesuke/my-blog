import type { GetStaticProps } from 'next';
import Layout from '../components/Layout';
import PostsAll from '../components/PostsAll';
import { getAllPosts } from '../lib/notionPost';
import { PostOverview } from '../types/type';

type StaticProps = {
  posts: PostOverview[];
};

const Index: React.FC<StaticProps> = ({ posts }) => {
  return (
    <Layout>
      <PostsAll postsOverViews={posts} />
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<StaticProps> = async () => {
  const posts = await getAllPosts();
  return {
    props: {
      posts,
    },
    revalidate: 60,
  };
};

export default Index;
