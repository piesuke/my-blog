import styles from "./index.module.scss"
import Image from 'next/image'
import { Box } from "@chakra-ui/react"

type Props= ({
    className?: string
    path: string
    post: Post
    children?: never
})

const PostDetail: React.FC<Props> = ({
    className,
    path,
    post,
    children
}) => {
    return(
        <>
            <Box maxW="700" display={"flex"} justifyContent={"center"}>
                <Image
                    src={post.coverImage}
                    alt={"カバー画像"}
                    width={700}
                    height={393.75}
                />
            </Box>
            <article className={styles.article}>
                <h1 className={styles.title}>{post.title}</h1>
                <div
                    className={styles.markdown}
                    dangerouslySetInnerHTML={{ __html: post.content }}
                >

                </div>
            </article>
        </>
    )
}

export default PostDetail;