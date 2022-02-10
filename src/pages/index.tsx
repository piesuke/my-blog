import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { type } from 'os'
import Layout from '../components/Layout'
import PostsAll from '../components/PostsAll'
import { getAllPosts, getPostsStaticPagePaths } from '../lib/posts'

type StaticProps = {
  postOverviews: PostOverview[]
}

type Props = StaticProps & {
  children?: never
}

const Index: React.FC<Props> = ({postOverviews, children}) => {
  return (
    <Layout>
      <PostsAll 
        postsOverViews={postOverviews}
      />
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({params}) => {
  const postOverviews = await getAllPosts()
  return {
      props: {
        postOverviews
      },
  }
}

export default Index
