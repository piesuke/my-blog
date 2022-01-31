import PostLayout from "../../layouts/PostLayout";
import {GetStaticProps} from 'next';
import { getPostSlugs } from "../../lib/api";


type StaticProps = {
    post: Post
}

type Props = StaticProps & {
    children?: never
  }


const Post: React.FC<Props> = ({post, children}) => {
    return(<PostLayout path={""} post={{
        title: "",
        content: "",
        date: "",
        coverImage: ""
    }} />)
}

export default Post;

// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: true
//     }
// }

export async function getStaticProps: GetStaticProps<StaticProps> = async ({params}) => {
    const post = await getPostSlugs(params?.slug as string)
}