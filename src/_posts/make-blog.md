---
title: Next.jsで自作ブログを作った話
tags: Nextjs, React
date: '2022-02-10'
isPublic: true
coverImage: "/cover/make-blog/index.jpeg"
---

この度、Next.jsを使ってmarkdownで記事を書けるブログを作ったのでつらみポイントを共有しておきます。

## なんで作ろうと思ったん？

業務でReactを使う機会があり、今まではNuxtやVue.jsしか触ったことがなかったので、「なんか作ってReactに慣れなければ...」と思ったのがきっかけです。

このブログのリポジトリは[こちら](https://github.com/piesuke/my-blog)

## バージョン

- Next 12.0.9
- React 17.0.2
- react-dom 17.0.2

## Next.jsプロジェクトを作成する

まずはNext.jsのプロジェクトを作成していきます。

```unix
npx create-next-app 自分のブログ名
```

プロジェクトを作成したら、確認のためサーバーを立ち上げてみます。

```unix
cd 自分のブログ名
npm run dev
```

上手くいっていると、`http://localhost:3000`にアクセスすると、Next.jsの初期画面が表示されます。

## markdownでブログを作成する

