import PostCard from '../PostCard';

type Props = {
  postsOverViews: PostOverview[];
};
const PostsAll: React.FC<Props> = ({ postsOverViews }) => {
  return (
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
};

export default PostsAll;
