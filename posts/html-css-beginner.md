---
title: '初心者向けHTML/CSS入門：書き方の基本と現場レベルのTIPSの紹介'
description: 'Webサイト制作に挑戦する初心者向けにHTML/CSSの基本や押さえておくと良いポイントなどを紹介します。'
date: '2021-06-14'
category: 'テクノロジー'
tags: ['フロントエンド', '初心者', 'HTML', 'CSS']
image: 'html-css-beginner.png'
---

ごきげんよう。ぶちやです。

このページに辿り着いたということは、おそらくWebサイトの作り方を学び始めていたりHTML/CSSについてざっくりと知りたくていろいろ検索したのでしょう。
安心してください。まずは最初に押さえておくべきポイントをまとめました。
Webサイト制作に挑戦する初心者向けにHTML/CSSの基本や押さえておくと良いポイントなどを紹介します。

## 目次

## はじめに
HTML/CSSはWebサイトやWebページを作成する時に使うものです。
使えるようになると自分や友達のWebサイトを作ったり仕事として活かしたりすることができるようになるかもしれません。
ランディングページ（LP）と呼ばれる最初に訪れる1ページの作成を仕事として依頼する会社も多いです。
HTML/CSSの基本をしっかり押さえてWebページを作れるようになれば、少しずつ仕事として受けることも可能になっていきます。
HTML/CSSの使って何をしたいかの目的が明確であれば覚えやすいのでしっかりイメージしながら読むことをおすすめします。


## Webサイト制作で使用する言語
Webサイト制作で使用する言語は以下の3つです。

- HTML
- CSS
- JavaScript

### HTML
HTML（HyperText Markup Language）とは、Webページの「文書構造」を表す言語です。

- HyperText：複数の文書（テキスト）を相互に関連付け、結び付ける仕組み
- Markup：文書の各要素に目印を与えて行くこと
- Language：言語

文書なので、本や書類をイメージするとわかりやすいです。
見出し・段落・表・図版などを一つずつ指定していき組み立てていきます。

### CSS
CSS（Cascading Style Sheets）とは、WEBページ上の「見栄え」を定義するための言語です。
HTMLで組み立てた各要素にどのような見た目になるかを指定するものです。よく「スタイルをあてる」と言ったりします。
Cascadingとは、「階段上に連続する滝」という意味があり、記述する順に設定されていき同じ場所に指定したものは後に記述したほうが優先される仕組みになっています。
Webサイトであれば複数ページに対してCSSを設定していくようになってくるので、このCascadingの仕組みを理解しながら設定していくことになるでしょう。

### JavaScript
JavaScriptとは、主にWebブラウザ上で使用されることを目的としたプログラミング言語です。
HTML/CSSで組み立てた要素に動きをつけたりするような機能を実装する時に使います。
今回はJavaScriptについては割愛しますが、より高度なことをしたい場合に使うことになるでしょう。

### それぞれに役割がある
それぞれの言語について説明しましたが、実はお互いの役割のものを使うことができるものがあります。

- HTMLにCSSやJavaScriptを書ける
- CSSでアニメーションをつけられる
- JavaScriptで文書の要素を作ったりスタイルを設定できる

しかし、それぞれの役割があるので基本的に以下の役割でかき分けたほうが良いです。

**HTML（構造） + CSS（体裁） + JavaScript（機能）**

上記の役割を越えて実装すると変更しづらくなっていきます。
例えば、JavaScriptでCSSを当てていることに気づかず特定に時間がかかったり、HTMLでスタイルをあてていると上書きができなくて困ってしまったりしてしまいます。
こうなってしまうと無理に組んでしまうことになり、最終的には変更ができなくなってしまう可能性があります。
しかし、高度なことする時には上記のことを理解した上であえて役割を越えて使うこともあります。
詳しくは割愛しますが、まずは役割に沿ってきちんと実装できるようになることから始めましょう。


## 制作に必要なもの
制作するにあたって以下が必要になってきます。

- Webブラウザ
- テキストエディタ

いずれも無料で手に入ります。
必要に応じてダウンロードしてインストールしましょう。

### Webブラウザ
主要なWebブラウザは各端末に対応しているものと対応していないものがあります。

<div style="overflow: hidden; max-width: 100%">
  <div style="overflow: auto">
    <table>
      <thead>
        <tr>
          <th style="text-align: center">Webブラウザ</th>
          <th style="text-align: center">Mac</th>
          <th style="text-align: center">Windows</th>
          <th style="text-align: center">iPhone</th>
          <th style="text-align: center">Android</th>
          <th style="text-align: center">iPad</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Google Chrome</td>
          <td style="text-align: center">○</td>
          <td style="text-align: center">○</td>
          <td style="text-align: center">△</td>
          <td style="text-align: center">◎</td>
          <td style="text-align: center">△</td>
        </tr>
        <tr>
          <td>Mozilla Firefox</td>
          <td style="text-align: center">○</td>
          <td style="text-align: center">○</td>
          <td style="text-align: center">△</td>
          <td style="text-align: center">△</td>
          <td style="text-align: center">△</td>
        </tr>
        <tr>
          <td>Microsoft Edge</td>
          <td style="text-align: center">○</td>
          <td style="text-align: center">◎</td>
          <td style="text-align: center">△</td>
          <td style="text-align: center">△</td>
          <td style="text-align: center">△</td>
        </tr>
        <tr>
          <td>Apple Safari</td>
          <td style="text-align: center">◎</td>
          <td style="text-align: center">△</td>
          <td style="text-align: center">◎</td>
          <td style="text-align: center">×</td>
          <td style="text-align: center">◎</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>


◎：標準で実装されている
○：対応おすすめ
△：対応おかまかせ
×：非対応

実際の業務でよく対応しているものを◎と○にしているので、まずは最低限きちんと表示・動作するように作成すると良いでしょう。


### テキストエディタ
テキストエディタはたくさんあり好きなものを使用すると良いでしょう。

- Visual Stadio Code (VSCode)
- Sublime Text
- Atom
- Brackets
- Vim

HTML/CSS/JavaScriptをメインで扱うのであればVisual Stadio Codeがおすすめです。
サーバサイド言語を扱ったりCLI（コマンドラインインターフェース）ツールをよく使う人であれば、Vimを使うのも良いでしょう。
ただし、Vimは他のテキストエディタと違ってモード切り替えやショートカットキーを使う前提になっているので、初めのうちは使わなくて良いかと思います。
私もVimは使っていません。


### 制作する手順
制作中に確認するWebブラウザを決め、テキストエディタで制作しながらキリの良いところでWebブラウザで確認していきます。
最終的にはそれぞれのWebブラウザに対応することになりますが、制作中にメインで確認するWebブラウザは1つで十分です。
こだわりが特になければGoogle Chromeで確認すると良いでしょう。
理由としては、PCではシェアが一番高く開発者ツールについての参考記事もGoogle Chromeで説明されているものが多いから慣れておくと良いからです。

一通り制作できたら他のWebブラウザを確認して調整します。
まとめると以下です。

1. テキストエディタでコーディングする
2. Webブラウザで確認する
3. 修正箇所があれば1.へ戻る
4. 修正箇所がなくなったら他のブラウザでも確認する
5. 修正箇所があれば1.へ戻る


### 開発者ツール
Webブラウザで確認した時、実際に作成したHTML/CSSを確認するのに役立つのが開発者ツールです。
MacはCommand + Option + I、WindowsはF12で開きます。
高機能でいろいろ確認できますが、最初は以下2つを押さえておくと良いでしょう。

- Elements（インスペクタ）：HTML/CSSを確認する時
- Console：JavaScriptやエラーを確認する時

開発者ツールの説明は今回は割愛しますが、いろいろ触ったり調べたりして慣れるようにすると良いでしょう。


## HTMLの基本

### 基本構造
HTMLの基本構造は以下のようになっています。

![](/img/posts/html-css-beginner-1.png)

- ドキュメントタイプ宣言（HTMLのバージョン）
- HTML文書の定義
- ヘッダ情報
- 文書本体

ドキュメントタイプ宣言とHTML文書の定義はお決まりなのでそのまま使うだけで問題ありません。
ヘッダ情報や文書本体はWebページによって違う内容になってくるので適宜コーディングしていきます。


### 要素と属性
実際のHTMLの各要素は以下のような構成になっています。

![](/img/posts/html-css-beginner-2.png)

<table>
  <tr>
    <th style="width: 4em">要素</th>
    <td>見出しや段落などを指定するもの（タグともいう）。<br />適切な要素を使い文書としてわかりやすくする。</td>
  </tr>
  <tr>
    <th style="width: 4em">属性</th>
    <td>要素に対して指定するもの。<br />要素によって使える属性が異なり、汎用的なものと専用的なものがある。</td>
  </tr>
  <tr>
    <th style="width: 4em">値</th>
    <td>属性の実際の値</td>
  </tr>
</table>


### 入れ子構造と空要素
![](/img/posts/html-css-beginner-3.png)

開始・終了要素を互い違いにすることはできないので気をつけましょう。
終了要素が不要な空要素というものも存在します。


### コンテンツモデル
HTMLにはコンテンツモデルというものが存在し、以下のように分類されています。

![](/img/posts/html-css-beginner-4.png)

コンテンツモデルは全部を暗記する必要はありません。
そしてよく使う要素、使わない要素は割とはっきりと分かれます。
まずはよく使う要素について知っていき、必要に応じてコンテンツモデルを理解していっても遅くはないでしょう。
あくまでもコンテンツモデルは概念であって知らないとまずいわけではないということを理解していただければ問題ありません。
実際によく使う要素を赤字にしているので、赤字の要素から使えるようになると良いでしょう。


### よく使う要素
実際によく使う要素を以下の表にまとめました。
まずは以下をしっかりと理解して使えるようにしましょう。

<table>
  <tr>
    <th>区切り</th>
    <td>div / section / header / footer / main / article / aside / nav</td>
  </tr>
  <tr>
    <th>見出し</th>
    <td>h1 / h2 / h3 / h4 / h5 / h6</td>
  </tr>
  <tr>
    <th>段落</th>
    <td>p</td>
  </tr>
  <tr>
    <th>改行</th>
    <td>br</td>
  </tr>
  <tr>
    <th>リンク</th>
    <td>a</td>
  </tr>
  <tr>
    <th>画像</th>
    <td>img</td>
  </tr>
  <tr>
    <th>インラインの<br />意味づけ</th>
    <td>strong / em / small</td>
  </tr>
  <tr>
    <th>リスト</th>
    <td>ul > li<br />ol > li<br />dl > dt + dd</td>
  </tr>
  <tr>
    <th>表</th>
    <td>table > tr > th + td</td>
  </tr>
  <tr>
    <th>フォーム</th>
    <td>form / input / textarea / select > option / label / button</td>
  </tr>
</table>

※「>」や「+」はCSSセレクタの書き方です。

### パスについて
リンクや画像を指定する時、場所を指定する必要があります。
その場所のことをパスと呼びます。

![](/img/posts/html-css-beginner-5.png)

パスは現在のHTMLファイルを基準に指定することになります。
どのHTMLファイルであろうが変わらない指定方法を絶対パスと呼びます。
HTMLファイルが置いてある位置によって指定先が代るものを相対パスと呼びます。
どちらもメリット・デメリットがあり状況によって使い分けます。
いろんな状況があるのでその時々で適切な指定方法を選ぶようにしましょう。


### 文字コード
テキストファイルには文字コードと呼ばれるものがあります。
この文字コードが指定したものと違った時によく「文字化けして読めない」となります。
現在ではUTF-8を指定しておけばまず間違いないです。
参考程度に代表的なものを以下にまとめておきます。

<table>
  <tr>
    <th>UTF-8</th>
    <td>文字範囲が広く、どの国の文字も文字化けしない。</td>
  </tr>
  <tr>
    <th>Shift-JIS</th>
    <td>2バイトで表現するJIS漢字符号(JIS X 0208)の文字を1バイトで表現するASCIIコードと混在させるためにマイクロソフト社が開発した文字コード。</td>
  </tr>
  <tr>
    <th>EUC-JP</th>
    <td>拡張UNIXコードともいう。UNIX上で漢字などを扱うためのマルチバイトコードのことである。EUCでは漢字だけでなく中国語や韓国語なども扱える。</td>
  </tr>
</table>

ちなみにHTMLメールはUTF-8ではなくiso-2022-jpが推奨されています。

## CSSの基本

### 記述位置と優先順位
![](/img/posts/html-css-beginner-6.png)

スタイルを記述できる位置は複数あり優先順位が付けられています。
優先順位は要素に近い順になっています。
優先度が高いところに記述したくなるかもしれませんが、基本は外部ファイルにまとめて記述します。
外部ファイルに記述する理由はいくつかあります。

メリット
- 複数に同じ指定を共有で設定できる
- 複数のHTMLファイルで読み込ませることができる
- HTMLとCSSが分かれていることによって読みやすい
- Cascading（上書き）をうまく利用できる

デメリット
- 要素に直接設定すると上書きが大変になる（非推奨な上書きになる）
- スタイルの記述場所がバラけて把握しにくい

### 記述方法
![](/img/posts/html-css-beginner-7.png)

各スタイルをCSSファイルに記述していきます。記述方法は上記のような書き方になります。
基本的に後に記述したほうが優先されますが、classよりもidが優先されたり、セレクタの指定数が多い方が優先されたと優先度は一概に記述順とはなりません。
上記以外の理由もありidは基本的にスタイルを設定する時には使いません。
セレクタはclassやHTML要素で指定していくことになりますが、以下に注意しながら設定していきます。

- 名前が他と被らないようにルールを決める
- 基本的にHTML要素にclassを指定しておき、classでセレクタ指定する
- セレクタはなるべく簡潔にして複数指定は最低限にとどめる


### ボックスモデル
![](/img/posts/html-css-beginner-8.png)

スタイルにはボックスモデルという概念があります。よく箱に見立てて考えたりします。
要素に対して余白や境界線、ボックスとしての振る舞いを設定する時に必要な概念です。
特にmarginとpaddingの違いは戸惑いがうまれやすいかと思います。borderがない場合、余白をつけるにはmarginとpaddingどちらでも余白をとることができる場合があるからです。
その際は、他のコンテンツが上下左右に並んだ時に余白がどうあるべきか考えると、どちらをつけたほうが良いかわかってくるかと思います。
ボックスモデルのポイントを以下に列挙しておきます。

- マージンの相殺
- ネガティブマージン
- ボックスレイアウト（Flexbox, CSS Grid）
- 中央寄せ
- float
- clearfix
- border-box

上記はそれぞれ1記事書けるほどの内容なので今回は割愛します。

### インライン要素
![](/img/posts/html-css-beginner-9.png)

インライン要素も奥が深いです。行間や文字に対して指定するスタイルがあります。
デザインの目が養われてくると細かい部分が気になってきます。
インライン要素のポイントを以下に列挙しておきます。

- 謎の縦空白がある場合はline-heightを疑う
- 謎の横空白がある場合はdisplay: inline-blockを指定してみる
- 太字は横幅が広がるのでレイアウト崩れに注意
- フォントはそれぞれ大きさが異なる
- 端末によってフォントの大きさが微妙に違う場合がある
- img要素のデフォルトはdisplay: inline

他にも挙げればキリがないですが、上記をまずは押さえておくと良いでしょう。

### よく使うプロパティ
スタイルは必要に応じて設定するので使うプロパティはたくさんあります。
たくさんある中から厳選して最初に覚えて使えるようにするものだけに絞りました。
以下はどのWebサイトでもほぼ確実に使うものなのでぜひ使えるようにしましょう。

### レイアウト系
<table>
  <tr>
    <th>margin</th>
    <td>Borderより外側の余白</td>
  </tr>
  <tr>
    <th>padding</th>
    <td>Borderより内側の余白</td>
  </tr>
  <tr>
    <th>border</th>
    <td>境界線</td>
  </tr>
  <tr>
    <th>display</th>
    <td>表示形式</td>
  </tr>
  <tr>
    <th>position</th>
    <td>ボックスの配置方法</td>
  </tr>
  <tr>
    <th>top<br />bottom<br />left<br />right</th>
    <td>配置位置（距離）</td>
  </tr>
  <tr>
    <th>z-index</th>
    <td>重なりの順序</td>
  </tr>
</table>

### インライン系
<table>
  <tr>
    <th>color</th>
    <td>文字色</td>
  </tr>
  <tr>
    <th>font-size</th>
    <td>文字サイズ</td>
  </tr>
  <tr>
    <th>font-family</th>
    <td>フォントファミリー</td>
  </tr>
  <tr>
    <th>line-height</th>
    <td>行の高さ</td>
  </tr>
  <tr>
    <th>text-align</th>
    <td>行揃えの位置</td>
  </tr>
  <tr>
    <th>vertical-align</th>
    <td>行のなかでの縦方向の揃え位置</td>
  </tr>
  <tr>
    <th>text-indent</th>
    <td>インデント（字下げ）</td>
  </tr>
</table>

## おまけ
実際の業務ではWebページを0からコーディングする際、デザインイメージを基に計画書を書きます。これをやることによってHTML要素を決めたりclass名や画像ファイル名などの命名規則を考えたりするのにとても役立ちます。

1. デザインイメージ（psd/png等）を基に計画書を書く<br />HTML要素・class名・id名・画像名等を紙に書き出す
2. HTMLを書く
3. CSSを書く
4. ブラウザで微調整をおこなう

![](/img/posts/html-css-beginner-10.png)

この情報は他のサイトで見かけたことがないのでここだけでも覚えておいてください。
覚えるのが面倒であればブックマークすることをおすすめします。


## さいごに
HTML/CSSの基本から現場レベルのお役立ち情報を紹介することができたのではないでしょうか。たくさん情報がある中で最初に押さえておくべき情報・知識は絞ったほうが覚えやすいかと思います。
より効率的にコーディングできるように工夫してHTML/CSSのコーディングに慣れていきましょう。
