---
title: 'サイト設計でよくある横並びコンテンツのスタイルの選択基準'
description: 'CSSにはいろんなスタイルがあり、いろんなスタイルを組み合わせて実現したい体裁に整えていきます。 今回はサイト設計でよくある横並びコンテンツのスタイルの選択基準について解説します。'
date: '2016-10-02'
category: 'テクノロジー'
tags: ['コーディング', 'サイト設計']
image: 'row-layout-markup-featured-img.jpg'
---

ごきげんよう。ぶちやです。

CSSにはいろんなスタイルがあり、いろんなスタイルを組み合わせて実現したい体裁に整えていきます。
今回はサイト設計でよくある横並びコンテンツのスタイルの選択基準について解説します。

## 目次

## よくある横並びコンテンツ

まずはどんなものがあるか列挙します。

* グローバルナビゲーション
* パンくずリスト
* メインコンテンツとサブコンテンツ
* テキストリンク・ボタン等の横並び

上記は昔からよくあるコーポレートサイトを想像してもらうとわかりやすいです。
大きいものから小さいものまで横並びにするコンテンツがあるかと思います。
小さいものは文章のように複数行に改行を入れて折り返したいものもあるでしょう。
サイト設計ではコンテンツの可変・性質を考えて設計しないと運用の時に破綻してしまうことがあります。


## 横並びにする方法

さて、横並びにする方法はいくつご存じでしょうか？
横並びにする方法は以下があります。

* **float**でleft又はrightで回り込ませ親要素で回り込み解除させる
* displayの**inline-block**で文字の塊として横並びにする
* displayの**table**, **table-cell**で表組のように並ばせる
* displayの**flex**でモダンにレイアウトする

それぞれメリット・デメリットがあります。

|プロパティ           |用途                              |メリット                          |デメリット                                          |
|----------------|--------------------------------|------------------------------|-----------------------------------------------|
|float           |回り込みさせる時に使用する。昔から並列の為によく使用されていた。|図版をfloatさせて周りに文字を回り込ませたりできる。  |floatを使用すると回り込み解除を設定しないと要素が潰れたりと意図しない現象が起きてしまう。|
|inline-block    |インライン要素として並列させる時に使用する。          |文字の塊で横並びにできる。                 |各要素の間に隙間ができてしまう。                               |
|table table-cell|表組のように並列させる時に使用する。              |各要素の横幅を指定しなくても親要素に応じて補完してくれる。 |table要素扱いになるのでmarginが使用できない等の気を付ける点がある。        |
|flex            |柔軟なレイアウトを扱う時に使用する。              |要素を上下左右、好きな順序に並び替えられる等の柔軟性がある。|レガシーブラウザは記述方法が異なったり対応していないものが多い。               |

簡単にまとめましたが、実際に使用する時にはfloatやdisplayだけでは不十分です。
必要に応じて他のプロパティや親要素にも設定したりとちょっとしたコツがあります。
おまじないのように使用するのではなく、プロパティがどのように振る舞うのか仕様を理解するようにしましょう。

### 参考
* [floatを解除する手法のclearfix と 次世代のレイアウトの話](http://kojika17.com/2013/06/clearfix-2013.html)
* [inline-blockを並べた場合に発生する「隙間」を消去するCSS](http://inspire-tech.jp/2011/06/inline_block_spaces/)
* [CSS3のdisplay:tableとdisplay:table-cellでレイアウト](http://www.webdlab.com/labs/layout-css3-2/)
* [これからのCSSレイアウトはFlexboxで決まり！](http://www.webcreatorbox.com/tech/flexbox/)


## 横並びコンテンツのスタイル

横並びにするコンテンツと方法を確認したところで、それぞれどの方法でスタイルするのかを見てみましょう。

|コンテンツ           |方法              |
|----------------|----------------|
|グローバルナビゲーション    |table table-cell|
|パンくずリスト         |inline-block    |
|メインコンテンツとサブコンテンツ|float           |
|テキストリンク・ボタン等の横並び|inline-block    |

実際のデモを用意しました。
※HTMLはSlim, CSSはSCSSで記述しています。
※デモ用のためにスタイルを設定しているものは下に固めて記述してあります。

[Standard layout](http://codepen.io/buchiya4th/pen/ozGbaE/)

##  まとめ

いかがだったでしょうか。長年マークアップしている人はfloatですべて記述している方もいらっしゃったのではないでしょうか。
flexが登場して柔軟なレイアウトが実現できるようになった反面、仕事で制作するようなサイトではレガシーブラウザの対応まで求められることがまだあるので、今回は使用してないことにしました。
仕事で制作する時は、制作要件やブラウザ対応状況等を考えながらどの方法を採用するか検討して実装しないとサイト設計では後々つらくなってきます。ただ、スピードを求められて突貫で完成させなければいけない時もあれば、数ページ規模で運用時に修正が少なければあまり影響がなかったりします。
いずれにせよ、美しく堅牢な設計がおこなえれば運用時に心を曇らせなくて済みますね。
美しいマークアップをおこなって早く帰れるようにしていきましょう。

それでは、ごきげんよう。