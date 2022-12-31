import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';
import { SwitchObjectType } from './switchObjectType';

type Props = {
  results: (PartialBlockObjectResponse | BlockObjectResponse)[];
};

const NotionPost: React.FC<Props> = ({ results }) => (
  <div>
    {results.map((result) => {
      return (
        <div key={result.id}>
          <SwitchObjectType result={result} />
        </div>
      );
    })}
  </div>
);

export default NotionPost;
