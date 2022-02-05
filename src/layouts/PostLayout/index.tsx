
type Props= ({
    className?: string
    path: string
    post: Post
    children?: never
})

const PostLayout: React.FC<Props> = ({
    className,
    path,
    post,
    children
}) => {
    return(
        <><div>{post.title}</div><div>{post.content}</div></>
    )
}

export default PostLayout;