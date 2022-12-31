import { Box } from '@chakra-ui/react';
import styles from './index.module.scss';
import Image from 'next/image';

type Props = {
  className?: string;
  title: string;
  coverImage: string;
  date: string;
  tags: string[];
  slug: string;
  children?: never;
};

const PostCard: React.FC<Props> = ({
  className,
  title,
  coverImage,
  date,
  tags,
  slug,
  children,
}) => {
  return (
    <Box as={'a'} href={`/posts/${slug}`} className={styles.link}>
      <li className={styles.list}>
        <Box display={'flex'} alignItems={'start'}>
          <Box mr={'4'} minW={128}>
            <Image
              src={coverImage}
              alt={'カバー画像'}
              width={128}
              height={72}
            />
          </Box>
          <Box display={'flex'} flexDirection={'column'}>
            <h2>{title}</h2>
            <time className={styles.date} dateTime={date}>
              {date}
            </time>
          </Box>
        </Box>
      </li>
    </Box>
  );
};

export default PostCard;
