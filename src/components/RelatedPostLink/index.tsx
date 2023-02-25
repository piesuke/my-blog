import { Link } from '@chakra-ui/react';
import { RelatedPostLink } from '../../types/type';

type Props = {
  className?: string;
  relatedPostLink: RelatedPostLink;
};

const RelatedPostLinkView: React.FC<Props> = ({ relatedPostLink }) => {
  return (
    <>
      <Link color={'#0bd'} href={`/posts/${relatedPostLink.slug}`}>
        {relatedPostLink.title}
      </Link>
    </>
  );
};

export default RelatedPostLinkView;
