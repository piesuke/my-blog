import PostDetail from "../../components/PostDetail";
import {GetStaticPaths, GetStaticProps} from 'next';
import { getPost, getPostsPagePaths } from "../../lib/posts";
import Layout from "../../components/Layout";


type StaticProps = {
    post: Post
}

type Props = StaticProps & {
    children?: never
  }


const Post: React.FC<Props> = ({post, children}) => {
    return(
        <Layout>
            <PostDetail path={""} 
                post={{
                    title: post.title,
                    content: post.content,
                    date: post.date,
                    coverImage: post.coverImage,
                    tags: post.tags
                }} 
            />
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

export default Post;