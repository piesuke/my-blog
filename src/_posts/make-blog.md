---
title: Next.jsで自作ブログを作った話
tags: Nextjs, React
date: "2022-02-10"
isPublic: false
coverImage: "/cover/make-blog/index.jpeg"
---

この度、Next.js を使って markdown で記事を書けるブログを作ったのでつらみポイントを共有しておきます。

## なんで作ろうと思ったん？

業務で React を使う機会があり、今までは Nuxt や Vue.js しか触ったことがなかったので、「なんか作って React に慣れなければ...」と思ったのがきっかけです。

このブログのリポジトリは[こちら](https://github.com/piesuke/my-blog)

## バージョン

- Next 12.0.9
- React 17.0.2
- react-dom 17.0.2

## Next.js プロジェクトを作成する

まずは Next.js のプロジェクトを作成していきます。

```shell
$ npx create-next-app 自分のブログ名
```

プロジェクトを作成したら、確認のためサーバーを立ち上げてみます。

```shell
$ cd 自分のブログ名
$ npm run dev
```

上手くいけば、`http://localhost:3000`にアクセスすると、Next.js の初期画面が表示されます。

## markdown を良い感じに表示する

ブログの肝である記事作成は、markdown で書いたものを HTML に変換するようにします。

### 記事のファイルを作成する

今回は `/src/_posts`配下に記事を作成しました。

```md filename="/src/_posts/hoge.md"
---
title: hoge
date: 2022-02-10
coverImage: /cover/hoge/index.jpeg
isPublic: false
---
```
