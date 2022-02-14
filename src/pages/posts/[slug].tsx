import PostDetail from "../../components/PostDetail";
import {GetStaticPaths, GetStaticProps} from 'next';
import { getPost, getPostsStaticPagePaths, getPreviewAndNextLink } from "../../lib/posts";
import Layout from "../../components/Layout";
import { NextSeo } from 'next-seo'
import RelatedPostLink from "../../components/RelatedPostLink";
import { Box, Text } from "@chakra-ui/react";


type StaticProps = {
    post: Post
    previewAndNextLink: PreviewAndNextLink
}

type Props = StaticProps & {
    children?: never
  }


const Post: React.FC<Props> = ({post, previewAndNextLink, children}) => {
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
                <Box display={"flex"} alignItems={"flex-start"} mt={"16"} flexDirection={"column"}>
                    {Object.keys(previewAndNextLink["preview"]).length > 0 && (
                        <>
                            <Text fontSize='xl' mt={"4"}>前の記事</Text>
                            <RelatedPostLink 
                                relatedPostLink={previewAndNextLink["preview"] as unknown as RelatedPostLink}       
                            />
                        </>
                    )}
                    {Object.keys(previewAndNextLink["next"]).length > 0 && (
                        <>
                            <Text fontSize='xl' mt={"4"}>次の記事</Text>
                            <RelatedPostLink 
                                relatedPostLink={previewAndNextLink["next"] as unknown as RelatedPostLink}               
                            />
                        </>
                    )} 
                </Box>
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
    const previewAndNextLink: PreviewAndNextLink = getPreviewAndNextLink(params?.slug as string);
    return {
        props: {
            post,
            previewAndNextLink
        },
    }
}

export default Post;