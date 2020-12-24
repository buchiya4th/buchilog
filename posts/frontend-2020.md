---
title: '【2020年】フロントエンドの棚卸し'
description: '2020年は世間的にコロナ禍の1年でした。2020年に開発でやったことを振り返って今年を締めたいと思います。'
date: '2020-12-25'
category: 'テクノロジー'
tags: ['フロントエンド']
image: 'frontend-2020.jpg'
---

2020年は世間的にコロナ禍の1年でしたね。
そんな中でも開発は止まらないもので今年も1年が終ろうとしています。
2020年に開発でやったことを振り返って今年を締めたいと思います。

## 今年ふれたもの

### ページ表示速度関連
- PageSpeed Insights
- Core Web Vitals

ページ表示速度を早くすることは最近のフロントエンドとして共通の課題となっている印象です。
[PageSpeed Insights API](https://developers.google.com/speed/docs/insights/v5/get-started?hl=ja)からデータを取得・集計してCSVファイルに書き出す、ということをやりました。Node.jsを使ってゴニョゴニョしただけなのでフロントエンドに表示させるものではなかったのですが、フロントエンドの改善に必要な作業でした。

Core Web Vitalsが2021年5月にGoogle検索のランキング要因に組み込まれる予定と発表がありました。そこで3つの指標（LCP、FID、CLS）を推奨値に最適化する必要が出てきました。
CLSの最適化に取り掛かったばかりなのでまだあまり慣れていませんが、Chromeの拡張機能「[Web Vitals](https://chrome.google.com/webstore/detail/web-vitals/ahfhijdlegdabablpippeagghigmibma)」を導入したり[開発者ツールのLighthouseでCLS 要素を特定する方法](https://www.suzukikenichi.com/blog/chrome-stable-enables-you-to-identify-elements-that-cause-large-cls/)を試したりしています。

### 動画広告
- IMA SDK
- Shaka Player

動画に広告を再生させるプロジェクトが始動して[IMA SDK](https://developers.google.com/interactive-media-ads/docs/sdks/html5/client-side)を使うことになりました。
[Shaka Player](https://github.com/google/shaka-player)という動画プレイヤーが実装されていたのでそこにIMA SDKを組み込み広告再生・動画本編再生できるように実装しました。
全体として3ヶ月ほどかかりましたが、iPhone Safariでなかなか再生できず[IMA SDK Support](https://groups.google.com/g/ima-sdk?pli=1)に連絡して再生できるようにするまでがかなりしんどくて時間がかかったように感じます。
英語で問い合わせるのは初めてだったので不安でしたが意思疎通はだいたいできていたように感じます。


## 今年使用したツール

### 開発環境
- Node.js (npm)
- yarn
- webpack
- babel

`$ npm ci` を知ってから `$npm install` は使わなくなりました。
Next.jsの環境でwebpack-bundle-analyzerを視覚的に確認する方法がわからなかったのでCLI上で簡単に確認する程度にとどまりました。
それ以外のアップデートは特になかったです。

### フレームワーク関連
- Next.js (React)
- Nuxt (Vue.js)

今年初めてNext.jsを使ってみました。
書き方がいろいろできて、要件によって使用するパッケージを自分で選定していく印象が強いです。
CSS関連のパッケージはいろいろ調べて最終的に人気急上昇中らしいemotionを採用しました。
Nuxtは3系でCompositionAPを使ったりTypeScriptを導入して最新の書き方で開発しようと試みましたが、思ったより書き方に馴染まず気持ち悪いなと思いながら書いていました。結局Next.jsに差し替えたので実績にはならずじまいになりました。


### JavaScript関連
- TypeScript

以前、入門だけして放置していましたが今年から開発に導入してみました。
まだ全然理解には至っていないですが、徐々に慣れていくスタイルでいこうと思ってます。


### CSS関連
- Sass
- emotion

[emotion](https://emotion.sh/docs/introduction)でCSS-in-JSを初めて使いました。
「CSSをJavaScript上でも使いたい」「Vue.jsのように1ファイルにスタイルも含めたい」といったところが自分の要望としてあり、emotionが合っているようでした。
今までスタイルをJavaScriptで書くことは少なかったので、本格的にJavaScriptでスタイル書いてる感がとてもありました。
書いていて気づいたのは、JSXで書くより上にスタイルを変数として宣言しないといけないので、いわゆるHTMLとCSSの順番はCSS→HTMLでないといけないということがわかりました。（JavaScriptととしては当然のことですが）


### Lint
- ESLint
- stylelint
- Prettier
- husky
- lint-staged

大きな変化はないですが、「オブジェクト内の最後のバリューの後にもカンマをつける」「if文の{}は省略しない」などをメンバーがプロダクトに新たに設定しました。
途中で追加したもんだから考慮していなかったこともあり警告が大量に出て椅子から転げ落ちるところでした。
修正するファイルで警告があったら対応していく、という方法で中長期的に全部解消する方針で進めています。

### テスト
- Jest

あまり触れられなかったので来年ことはしっかり使って慣れていきたい所存です。


## さいごに
今年は働く環境やメンバーが変わりとても刺激的な1年でした。
動画広告は初めて実装してみたしページ表示速度の改善は以前より高いレベルで取り組めました。
個人的にNext.js + TypeScriptの開発を始めたことによりフロントエンドエンジニアとしての知見が深まったように感じます。
来年はNext.jsを使ってフルスタックアプリケーションを作れるといいなと思います。

Have a nice engineering life!