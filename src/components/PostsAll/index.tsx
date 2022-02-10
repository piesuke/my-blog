import PostCard from "../PostCard";

type Props = ({
    className?: string
    postsOverViews: PostOverview[]
    children?: never
})
const PostsAll: React.FC<Props> = ({
    className,
    postsOverViews,
    children
}) => {
    return(
        <>
            <ul>
                {postsOverViews.map((postsOverView) => (
                    <PostCard
                        key={postsOverView.slug}
                        title={postsOverView.title}
                        coverImage={postsOverView.coverImage}
                        date={postsOverView.date}
                        tags={postsOverView.tags} 
                        slug={postsOverView.slug}                
                    />
                ))}
            </ul>
        </>
    );
}

export default PostsAll;