import styles from "./index.module.scss"

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
            <article className={styles.article}>
                <h2 className={styles.title}>{post.title}</h2>
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