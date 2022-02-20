---
title: リーダブルコードを読んでの要約と学び(まだ途中だが)
tags: Book
date: '2022-02-15'
isPublic: true
coverImage: "/cover/the-art-of-readable-code/index.jpeg"
---

リーダブルコードを昔に読んで「完全に理解した()」となっていたが、最近コードの可読性の低さについてレビューをもらうことが多かったので、もう一回きちんと読み直す。

読んだ本(ゴリゴリのAmazonアフィリンク)
→[リーダブルコード](https://amzn.to/3GPCI8z)

## この本の目的

- 読みやすいコードを書くこと
- 誰かが自分のコードを読んで理解する時間を最短にすること

## 1章 理解しやすいコード

- コードは他の人が最短時間で理解できるように書かなければならない。

## 2章 名前に情報を詰め込む

### 命名の規則

- 明確な単語を選ぶ
- 汎用的な名前を避ける(あるいは、使う状況を選ぶ)
- 抽象的な名前よりも具体的な名前を使う
- 接尾辞や接頭辞を使って情報を追加する
- 名前の長さを決める
- 名前のフォーマットで情報を伝える

### ①明確な単語を選ぶ

例えば、`get`は「何かを取得するんだな」というのは分かるが、一体何を取得するのか、どこから取得するのかがわからない。
もしインターネットから取ってくるのなら、`Download()`の方が明確だ。単語が抽象的になりすぎると思ったら、類語辞典を使って、もっと明確な類語を探すべきだ。

### ②汎用的な名前を避ける

tmp,retVal, fooのような空虚な名前をつけるのではなく、エンティティの値や目的を表した名前を選ぼう。

### ③抽象的な名前よりも具体的な名前を使う

例) Googleで使われていたマクロ

```c++
DISALLOW_EVIL_CONSTRUCTORS(ClassName);
```

では、「EVIL」という強い意志が感じられる単語が使われているが、許可しないものを明確にする方が大事である。
最終的には、

```c++
DISALLOW_COPY_AND_ASSIGN(ClassName);
```

となったらしい。

### ④接尾辞や接頭辞を使って情報を追加する

単位や重要な属性を持つ変数であれば、それらを末尾や先頭につける必要があるよね、という話。

例) `start_date`,`untrustedUrl`

### ⑤名前の長さを決める

スコープが小さければ短い名前でもいい。すぐそこに初期値や破棄方法が見えるならの話だが。
スコープがある程度大きいものであれば、変数の役割が見えにくくなるので、変数が少し長くなったとしても情報を詰め込む必要がある。

<br>
とはいえ、変数がだいぶ長くなる場合、

### ⑥名前のフォーマットで情報を伝える