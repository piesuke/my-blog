import { unified } from "unified";
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';
import rehypeHighlight from 'rehype-highlight'

const markdownToHtml = async(markdown: string) => {
    const result = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(rehypeStringify)
    .use(rehypeHighlight)
    .process(markdown)

    return result.toString();
}

export default markdownToHtml;