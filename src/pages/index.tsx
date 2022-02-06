import type { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { type } from 'os'
import Layout from '../components/Layout'

type StaticProps = {
  postOverviews: PostOverview[]
}

type Props = StaticProps & {
  children?: never
}

const Index: React.FC<Props> = ({postOverviews, children}) => {
  return (
    <Layout>
      
    </Layout>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getPostsPagePaths()
  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps<StaticProps> = async ({params}) => {
  const post = await getPost(params?.slug as string)
  return {
      props: {
          post
      },
  }
}

export default Index
