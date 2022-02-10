import PostDetail from "../../components/PostDetail";
import {GetStaticPaths, GetStaticProps} from 'next';
import { getPost, getPostsStaticPagePaths } from "../../lib/posts";
import Layout from "../../components/Layout";
import { NextSeo } from 'next-seo'


type StaticProps = {
    post: Post
}

type Props = StaticProps & {
    children?: never
  }


const Post: React.FC<Props> = ({post, children}) => {
    return(
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
                images:[{
                    url:`https://aono.dev${post.coverImage}`,
                    width: 700,
                    height: 393,
                    alt: 'Og Image Alt',
                    type: 'image/jpeg',
                }]
                }}
                twitter= {{
                handle: '@piesuke727',
                site: 'https://aono.dev',
                cardType: 'summary_large_image',
                }}
            />
            <Layout>
                <PostDetail path={""}
                    post={{
                        title: post.title,
                        content: post.content,
                        date: post.date,
                        coverImage: post.coverImage,
                        tags: post.tags
                    }} />
            </Layout>
        </>
    )
}

export const getStaticPaths: GetStaticPaths = () => {
    const paths = getPostsStaticPagePaths();
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