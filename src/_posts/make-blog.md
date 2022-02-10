---
title: Next + Vercelで自作ブログを作った話
tags: Nextjs, React
date: '2022-02-05'
isPublic: true
coverImage: "/cover/make-blog.png"
---

## ブログ作成でハマったポイント

### そもそもNextがわからん

これまでNextの使用経験はなく、Nuxtしか使ったことがなかったので、Reactの書き方に慣れるまでは苦労しました。

### getStaticPropsってなに

getInitialPropsが行っていた処理をビルド時に行い、静的なファイルを事前に生成するためのAPI。

## コードのテスト

```typescript
const getPost = async (slug: string): Promise<Post> => {
    const fullPath = join(postsDirectory, `${slug}.md`)
    const postMarkdown = fs.readFileSync(fullPath, 'utf8')
    const markdownResult = matter(postMarkdown)
    const postOverView: MatterData = markdownResult.data as MatterData;
    const content = await markdownToHtml(markdownResult.content)
    const title = postOverView.title
    const tags = postOverView.tags.split(',')
    const date = JSON.parse(JSON.stringify(postOverView.date));
    const coverImage = postOverView.coverImage
    const isPublic = postOverView.isPublic
    return {
        title,
        tags,
        date,
        coverImage,
        content
    }
}
```
