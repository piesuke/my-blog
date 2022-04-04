---
title: 「テスト駆動開発」を読んだ
tags: book
date: "2022-02-23"
isPublic: false
coverImage: "/cover/about-docker/index.jpeg"
---

## テストのパターン

### 自己接続パターン

テストケース自身を Mock Objects のように使う方法

```python
def testNotification(self):
    self.count = 0
    result = TestResult()
    result.addListener(self)
    WasRun("testMethod").run(result)
    assert(1 == self.count)

def startTest(self):
    self.count = self.count + 1
```
