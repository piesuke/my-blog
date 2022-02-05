import { unified } from "unified";
import remarkParse from 'remark-parse';
import remark2rehype from 'remark-rehype';
import rehypeStringify from 'rehype-stringify';

const shiki = require('rehype-shiki')

const markdownToHtml = async(markdown: string) => {
    const result = await unified()
    .use(remarkParse)
    .use(remark2rehype)
    .use(shiki, { theme: 'monokai' })
    .use(rehypeStringify)
    .process(markdown)

    return result.toString();
}

export default markdownToHtml;