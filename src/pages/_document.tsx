import React from 'react'
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import { existsGaId, GA_TRACKING_ID } from 'lib/gtag'
import { metaData } from '@/const/metaData'
import { googleTagManagerId } from '@/utils/gtm'

type Props = {
}

class MyDocument extends NextDocument<Props> {
  render(): JSX.Element {
    return (
      <Html lang="ja">
        <Head>
          <link rel="dns-prefetch" href="//platform.twitter.com" />
          <link rel="dns-prefetch" href="//connect.facebook.net" />
          <link rel="dns-prefetch" href="//www.googletagmanager.com" />
          <link rel="dns-prefetch" href="//static.xx.fbcdn.net" />
          <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
          <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
          <link rel="alternate" type="application/rss+xml" title={`${metaData.title}`} href={`${process.env.NEXT_PUBLIC_DOMAIN}/rss/feed.xml`} />
          <meta name="format-detection" content="telephone=no,email=no,address=no" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content={`${metaData.title}`} />
          <script data-ad-client="ca-pub-7461708163833457" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <noscript
            dangerouslySetInnerHTML={{
              __html: `
              <iframe
                src="https://www.googletagmanager.com/ns.html?id=${googleTagManagerId}"
                height="0"
                width="0"
                style="display:none;visibility:hidden"
              />`,
            }}
          />
          <Main />
          <NextScript />
          <script defer src="https://platform.twitter.com/widgets.js"></script>
          <script defer crossOrigin="anonymous" src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=1489772551268544&autoLogAppEvents=1" nonce="FYgc9evc"></script>
          {/* Global Site Tag (gtag.js) - Google Analytics */}
          {existsGaId ? (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
              />
              <script
                dangerouslySetInnerHTML={{
                  __html: `
                    window.dataLayer = window.dataLayer || [];
                    function gtag(){dataLayer.push(arguments);}
                    gtag('js', new Date());
                    gtag('config', '${GA_TRACKING_ID}', {
                      page_path: window.location.pathname,
                    });
                  `
                }}
              />
            </>
          ): null}
        </body>
      </Html>
    )
  }
}

export default MyDocument
