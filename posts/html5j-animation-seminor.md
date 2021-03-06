---
title: 'html5j Webプラットフォーム部 第17回勉強会に行ってきた'
description: '先日、html5j Webプラットフォーム部 第17回勉強会に行ってきました。今回のテーマは「アニメーション」でアニメーションに関する話を聞いて勉強になりました。勉強になった部分をまとめます。'
date: '2017-04-22'
category: 'テクノロジー'
tags: ['フロントエンド', '勉強会', 'アニメーション']
image: 'html5j-animation-seminor-featured-img.png'
---

ごきげんよう。ぶちやです。

半袖でランチに出かける日が出てくるほどの気温になってきました。春はいったいどこへ行ったのやら…。
先日、html5j Webプラットフォーム部 第17回勉強会に行ってきました。
今回のテーマは「アニメーション」でアニメーションに関する話を聞いて勉強になりました。
勉強になった部分をまとめます。

## 目次

## 勉強会概要

html5j Webプラットフォーム部 第17回勉強会
2017年4月21日(金)19:30～21:30
東京都港区港南 2-16-3 品川グランドセントラルタワー
日本マイクロソフト株式会社　品川オフィス
セミナールーム C+D
[https://html5j-webplat.connpass.com/event/54040/](https://html5j-webplat.connpass.com/event/54040/)

## Browser animation in 2017 - 動く・動かせ・動け！

[スライド](http://slides.com/birtles/browser-animation-2017/#/)

### 動く

今できることの話

#### アニメーションを取り入れる理由

* 変化を伝えるため（UI視点の使いやすさ）
  * 消えた
  * 増えた
  * 遷移した
* ユーザーと良いコミュニケーションを計るため（UX視点の良質体験）
  * クリックしたら可愛く・気持ち良く動く

#### CSS Transitions
* A -> B

※対応ブラウザはCSSTransitionGroupに注意

#### CSS Animations
* A -> B -> C
* A -> B -> A
* 繰り返す

#### Script animations
* greensock
* velocity.js

※JavaScriptは忙しくなるとカクつく

#### Web Animations API

```js
elem.animate(
  [
    { transform: 'scale(1)' },
    { transform: 'scale(2)' }
  ],
  1000
);
```

Polyfill: web-animations-js


### 動かせ

FirefoxのAnimation Inspectorの話

#### Animation Inspectorでできること
* タイムライン表示で変化を確認できる
* どのプロパティがアニメーションしているかわかる
* プロパティごとの変化を確認できる


#### 近い将来
* 編集できるように進行中
* Reactベーへ移行（GitHub）

#### もっと未来
* インスペクタ（調査） → オーサリング（作成）


### 動け

現状のアニメーションの課題

#### 問題1：フレームのアニメーション
コマ割り画像（スプライト画像）でコマ送りアニメーションを実装した場合、最初or最期が表示されない問題。
1コマ余分につくれば対応できるがイケてない。

#### 問題2：Transitionの終わりを待つ
Transitionendが発火されない問題。（JavaScript）

* 要素が消えた
* 要素の親がdisplay:noneになった
* transition-propertyからtransitionされているpropertyが消えた
* transitionがそもそも生成されなかった(例：opacityが既に0になった場合)

#### 問題3：アニメーションがぶつかる
別で用意したアニメーションを同時に併用できない問題。

* APIで回避（併用の実装）できる

#### 問題4：スクロールに沿ってアニメーションしたい
スクロールアニメーションはJavaScriptを駆使しないといけない問題。
以下のドラフトで今後実装されるかも？

* scroll-linked animations


## Animista 勉強嫌いがCSSアニメーション

### アニメーションで起きる現場の問題

リソース的な問題

* 学習コスト
* センス的なもの？
* コミュニケーションの問題
* ツール的な問題

Animistaを使えばいくつかの問題を解決に向かわせることができる

### Animistaの概要
* まだベータ版
* Playgroundページでタイミングなどを調整することが可能
* 実際のコードを吐きだすことができる
* BSDライセンス

### Animistaを使うと

* 学習コスト → ブラウザ上で試しながら学べる
* センス的なもの？ → 簡単に試せるのでノウハウが溜まる
* コミュニケーションの問題 → 抽象的な言葉での伝達方法からコードで具体的になる
* ツール的な問題 → Animista使いやすい・わかりやすい

### 実際の現場

#### Animista使わない場合
* デザイナーからエンジニアにアニメーション作成の要望
  * 参考URLや言葉での伝達なので意思疎通が大変
* ディレクターからエンジニアにアニメーションの修正の要望
  * 抽象的な言葉での伝達なので微調整が大変

#### Animista使った場合
* デザイナーからエンジニアにアニメーション作成の要望
  * Animistaを操作しながら決められる
* ディレクターからエンジニアにアニメーションの修正の要望
  * Animistaで具体的なコードを渡すよう請求できる



## アニメーションについての存在意義を議論をしよう

### 1) Webアニメーションの実装はどうなっていくべきか？
* できるだけCSSで実装すべき？
* できるだけJavaScriptで実装すべき？
* ライブラリやフレームワークに進化してもらうべき？

必要に応じてCSSもJavaScriptを使い分ける。併用する場合もある。

### 2) Webアニメーションの学習コストのかけ方
* まずは学習コストがかからないライブラリやフレームワークを中心に
* CSS/JSのアニメーションの基礎を学んでから実装すべき

わけもわからずライブラリやフレームワークを使わない→カスタマイズする必要が出てきた時に死ねる

### 3) Webサイトアニメーションってどんな効果がある？どう使うべき？
* インターフェースをわかりやすくする
* ユーザーの操作で楽しくなるもの

そのアニメーションはUIなのかUXなのか、しっかり理解しながら実装したほうが良さそう

### アニメーションのデメリット
* 本当に相手に伝わらなければいけない情報が伝わらない（行動同期になるわけではない）
* 示したいものに対して時間がかかる（だからローディングアニメーションが必要だったりする）
* こだわりすぎてサイトが重くなりがち
* 「クリエイティブ」とか「ブランディング」という言葉である種の「マーケティング」要素から逃げている→Webサイトの各コンテンツ

過剰なアニメーションかどうか判断するスキルが必要そう

### まとめ
* うまく使えばユーザーとの良いコミュニケーションがとれる
* まだまだ未成熟


## まとめ
アニメーションについて深く情報を追っていなかったり取り組んでいなかったので、とても有意義でした。
もともとノウハウによるところが大きい印象がありましたが、再認識する形となりました。
アニメーションに関する基本的なことや全体像を知ることができたので、今回の情報を基にアニメーションに取り組んでいきたいと思いました。
また一つ、創作意欲が湧きました。

それでは、ごきげんよう。
