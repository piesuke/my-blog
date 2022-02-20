---
title: dockerについての学び
tags: docker
date: '2022-02-23'
isPublic: false
coverImage: "/cover/about-docker/index.jpeg"
---

参考→https://zenn.dev/koduki/articles/b4cb0551523919
## Dockerとは？

Docker社によって開発されているコンテナ。

## コンテナとは？

コンテナはOS機能による仮想化の一種です。コンテナ == OCI系コンテナらしい。

OSを共有するのでVMWareなどのように自由にゲストOSを選ぶことはできない。

## イメージとコンテナ

### Dockerfileって何？

ビルドスクリプトのこと。インフラを作る手順書みたいなもの。ビルドの結果としてimageができる。

Dockerイメージとは、Dockerコンテナの実行に必要な概念としてのパッケージということ。

基本的にここにはアプリケーションの環境を定義する。

## Docker Compose

複数のコンテナを定義して実行するDockerアプリケーションのためのツール。

### docker-compose.yml

アプリケーションを構成するサービスを docker-compose.yml ファイル内に定義する。こうすることで、各サービスは独立した環境において起動することになる。

### docker-compose.ymlのサンプル

公式リファレンスから引用

```yml
version: '3'
services:
  web:
    build: .
    ports:
    - "5000:5000"
    volumes:
    - .:/code
    - logvolume01:/var/log
    links:
    - redis
  redis:
    image: redis
volumes:
  logvolume01: {}
```

### versionとは？

docker-composeで使用するバージョン。

[Compose file](https://docs.docker.com)

ここに書いてあるバージョンから選択する。

### servicesについて

アプリケーションのための各要素。公式のリファレンスではwebとredisが定義されている。
