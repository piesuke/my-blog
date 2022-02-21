---
title: Next.jsで自作ブログを作った話(途中)
tags: Nextjs, React
date: '2022-02-10'
isPublic: true
coverImage: "/cover/make-blog/index.jpeg"
---

この度、Next.jsを使ってブログを作ったのでつらみポイントを共有しておきます。

## なんで作ろうと思ったん？

業務でReactを使う機会があり、今まではNuxtやVue.jsしか触ったことがなかったので、「なんか作ってReactに慣れなければ...」と思ったのがきっかけです。

## ブログ作成でハマったポイント

### そもそもNextがわからん

これまでNext.jsの使用経験はなく、Nuxtしか使ったことがなかったので、Reactの書き方に慣れるまでは苦労しました。

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
