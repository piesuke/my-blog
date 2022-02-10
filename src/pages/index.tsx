import type { GetStaticProps } from 'next'
import Layout from '../components/Layout'
import PostsAll from '../components/PostsAll'
import { getAllPosts } from '../lib/posts'

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
