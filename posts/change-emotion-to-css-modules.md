---
title: 'ブログのCSSの使用ライブラリをEmotionからCSS Modulesに乗り換えた'
description: 'ブログのCSSの使用ライブラリをEmotionからCSS Modulesに乗り換えた時の背景や設計などを紹介します。'
date: '2022-01-31'
category: 'テクノロジー'
tags: ['ブログ', 'フロントエンド', 'CSS']
image: 'change-emotion-to-css-modules.png'
---

ごきげんよう、ぶちやです。

本ブログではスタイルをCSS-in-JSであるEmotionというライブラリを使用して実装していました。
しかし、この度CSS Modulesというライブラリに乗り換えました。
乗り換えた背景から実際にどのような観点で差し替えをおこなったのかご紹介します。

## 目次

## 乗り換えた背景

- CSS-in-JSの恩恵をほとんど受けていないと感じた
- 今まで通りのCSSで書いたほうがわかりやすい
- CSSファイルで管理したほうが新しいライブラリ登場時に移行が楽そう
- CSS-in-JSよりもCSS Modulesの方がパフォーマンス面で有利らしい
- そもそもNext.jsはCSS Modulesを推奨している

参考: [Next.js が CSS Modules を推奨する真相に迫りたい](https://zenn.dev/takepepe/scraps/6668e9fe402666)

## Emotionとは

JavaScriptを使用してスタイルを作成するために設計されたライブラリです。

[Emotion 公式サイト](https://emotion.sh/docs/introduction)

いわゆるCSS-in-Jsのライブラリの一つです。
実装当初、他のライブラリと比較をして使い勝手が良さそうなのと将来性があると感じて採用しました。
それぞれ違いはあれど基本的な部分は一緒なので、CSS-in-JSとCSS Modulesを比較して乗り換えを検討しました。

## CSS-in-JS

<table>
  <tr>
    <th>メリット</th>
    <th>デメリット</th>
  </tr>
  <tr>
    <td>
      <ul><li>ロジック側と値が共有可能になる </li></ul>
    </td>
    <td>
      <ul>
        <li>学習コストがかかる</li>
        <li>さまざまなライブラリが存在している</li>
        <li>他のライブラリに乗り換えづらくなりそう</li>
      </ul>
    </td>
  </tr>
</table>

## CSS Modules

<table>
  <tr>
    <th>メリット</th>
    <th>デメリット</th>
  </tr>
  <tr>
    <td>
      <ul>
        <li>従来のCSSを活かせる（学習コストがかからない）</li>
        <li>Sassを使用できる（<a href="https://nextjs.org/docs/basic-features/built-in-css-support">Next.jsの場合</a>）</li>
      </ul>
    </td>
    <td>
      <ul>
        <li>css-loader依存のCSS Modulesはメンテナンスモードに入った<br />※ <a href="https://github.com/vercel/next.js/issues/15542#issuecomment-981529411">Next.jsはカスタム実装を使用するので心配する必要はないとのこと</a></li>
        <li>classを複数指定した場合の適用順序は保証されない</li>
      </ul>
    </td>
  </tr>
</table>


## 実装方針

CSS-in-JSとCSS Modulesのメリット・デメリットを踏まえ、方針を考えました。

- CSSカスタムプロパティを使ってJSで操作できるようにする
- CSSで将来採用されそうな仕様のうちSassで実現できるものは草案の仕様を優先する
- Sassの機能は控えめに使う

### Sass機能

基本的にSassで高度なことをやらないようにしました。
`@function`, `@if`, `@for`などを使えば様々なことができますが、学習コストが高くなりややこしくなって読むのに時間がかかってしまうのを懸念しました。

<table>
  <tr>
    <th>機能</th>
    <th>方針</th>
  </tr>
  <tr>
    <td>変数</td>
    <td><a href="https://developer.mozilla.org/ja/docs/Web/CSS/Using_CSS_custom_properties">CSSカスタムプロパティ</a>を使用する</td>
  </tr>
  <tr>
    <td>ネスト</td>
    <td>
      <ul>
        <li>疑似要素や親子関係が密接なもの（li, th, tdなど）以外は無駄にネストしない</li>
        <li><a href="https://triple-underscore.github.io/css-nesting-ja.html">草案の書き方</a>にに沿って&を必ずつける</li>
      </ul>
    </td>
  </tr>
  <tr>
    <td>mixin</td>
    <td>必要に応じて使用する</td>
  </tr>
  <tr>
    <td>extend</td>
    <td>パフォーマンスに影響するので使用しない</td>
  </tr>
</table>

### CSS設計
stylesディレクトリにスタイルを集約しました。
コンポーネントとページで使用するものはコンポーネント側のディレクトリに合わせ、mixinを新設してvarsを改めました。

```txt
/styles
  /components
    /atoms
      ...
    /global
      ...
    /icon
      ...
    /molecules
      ...
    /organisms
      ...
  /mixin
    list.module.scss
    table.module.scss
    typography.module.scss
  /pages
    ...
  /vars
    colors.module.scss
    fonts.modules.scss
    zindex.module.scss
  /vendor
    ...
```

### 今回改めたところ

ウィンドウサイズに応じて文字サイズを変更するためにメディアクエリを使用している部分がありました。
この方法ではあるウィンドウサイズで急に文字サイズが大きくなるのでなめらかに大きくなる方が良いと漠然と思っていました。
そこで、以下のような方法を知ったのでこちらに切り替えました。

```css
p { font-size: clamp(1rem, 2.5vw, 2rem); }
```

参考:

- [CSSの数学関数min()、max()、clamp()の基本的な使い方](https://coliss.com/articles/build-websites/operation/css/three-logical-css-functions-min-max-clamp.html#h205)
- [CSSでメディアクエリはもう必要ないかも -メディアクエリなしで実装するテクニックのまとめ](https://coliss.com/articles/build-websites/operation/css/media-queries-probably-dont-need.html)

clampの2番目の数値は悩みました。
暫定として320pxにした時に1番目と同じ大きさになるように調整しました。
320pxから3番目の大きさになるまでvwで設定した比率で大きくなる想定です。

### 今回見送ったもの

CSSの新機能としてコンテナクエリがあり興味がありましたが、以下の点で見送りました。

- 今回は使えそうなところがそもそもなかった
- 試しにポリフィルが使用できるか実装しようとしたがうまく実装できなかった

機能としては使用頻度が高くなりそうなので、今後の動向を監視していきたいと思います。

参考:

- [CSSの新機能コンテナクエリのポリフィルがこれほど使いやすく、Googleから提供されたことは素晴らしい
](https://coliss.com/articles/build-websites/operation/css/new-container-query-polyfill.html)

## さいごに
ReactでのCSSの扱い方はまだまだデファクトスタンダードがないように思います。
CSS-in-JSも経験しましたが、個人の感想としてはやはり「JSとCSSは混ぜるな危険」という考えに戻りました。
CSSはSass（scssファイル）として管理していくのが現状では良さそうです。
複数人で扱うプロダクトになるとメンバー全員に対する学習コストやスキルを踏まえて技術選定をしなければいけないかと思います。
基本のCSSの記法からなるべく乖離がないほうが導入がスムーズで運用時にも事故が起こりにくいかと思います。
もし、Next.jsでCSS Modulesが使えなくなった時はまた違うツールを改めることになることでしょう。
その時にはもっと良い方法があることを期待しています。

それでは、ごきげんよう。
