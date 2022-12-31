import {
  BlockObjectResponse,
  PartialBlockObjectResponse,
} from '@notionhq/client/build/src/api-endpoints';

type Props = {
  result: PartialBlockObjectResponse | BlockObjectResponse;
};
export const SwitchObjectType: React.FC<Props> = (props) => {
  // @ts-ignore
  const value = props.result[props.result.type];

  // @ts-ignore
  switch (props.result.type) {
    case 'paragraph':
      return (
        <p className="sm:text-lg mb-6 md:mb-8">
          {value.rich_text[0]?.plain_text}
        </p>
      );
    case 'heading_2':
      return (
        <h2 className="text-3xl sm:text-3xl font-bold mb-6 md:mb-8">
          {value.rich_text[0]?.plain_text}
        </h2>
      );
    case 'heading_3':
      return (
        <h3 className="text-2xl font-bold mb-6 md:mb-8">
          {value.rich_text[0]?.plain_text}
        </h3>
      );
    case 'bookmark':
      return (
        <a
          href={value.url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          {value.url}
        </a>
      );
    case 'quote':
      return (
        <blockquote className="text-md italic font-semibold text-gray-200  my-8">
          <p>{value.rich_text[0]?.plain_text}</p>
        </blockquote>
      );
    case 'image':
      return (
        <img
          src={value.external.url}
          alt={value.caption[0]?.plain_text}
          className="w-[50%]"
        />
      );
    default:
      return <div></div>;
  }
};
