import styles from './index.module.scss';
import Image from 'next/image';
import { Box } from '@chakra-ui/react';
import { Post } from '../../types/type';

type Props = {
  post: Post;
};

const PostDetail: React.FC<Props> = ({ post }) => {
  return (
    <>
      <Box maxW="700" display={'flex'} justifyContent={'center'}>
        <Image
          src={post.coverImage}
          alt={'カバー画像'}
          width={700}
          height={393.75}
        />
      </Box>
      <article className={styles.article}>
        <h1 className={styles.title}>{post.title}</h1>
        <div
          className={styles.markdown}
          dangerouslySetInnerHTML={{ __html: post.content }}
        ></div>
      </article>
    </>
  );
};

export default PostDetail;
