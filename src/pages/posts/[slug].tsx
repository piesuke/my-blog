import PostLayout from "../../layouts/PostLayout";
import {GetStaticPaths, GetStaticProps} from 'next';
import { getPost, getPostsPagePaths } from "../../lib/posts";


type StaticProps = {
    post: Post
}

type Props = StaticProps & {
    children?: never
  }


const Post: React.FC<Props> = ({post, children}) => {
    return(<PostLayout path={""} post={{
        title: post.title,
        content: post.content,
        date: post.date,
        coverImage: post.coverImage,
        tags: post.tags
    }} />)
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