import React from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { existsGaId, GA_TRACKING_ID } from 'lib/gtag'
import { extractCritical } from 'emotion-server'
import { metaData } from '@/const/metaData'

type Props = {
}

type InitialProps = {
  styles: JSX.Element
  html: string
  head?: (JSX.Element | null)[] | undefined
}

class MyDocument extends NextDocument<Props> {
  static async getInitialProps(ctx: DocumentContext): Promise<InitialProps> {
    const initialProps = await NextDocument.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)
    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style
            data-emotion-css={styles.ids.join(' ')}
            dangerouslySetInnerHTML={{ __html: styles.css }}
          />
        </>
      ),
    }
  }

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
          <link rel="alternate" type="application/rss+xml" title={`${metaData.title}`} href={`${process.env.DOMAIN}/feed.xml`} />
          <meta name="format-detection" content="telephone=no,email=no,address=no" />
          <meta property="og:locale" content="ja_JP" />
          <meta property="og:site_name" content={`${metaData.title}`} />
          <script data-ad-client="ca-pub-7461708163833457" async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"></script>
        </Head>
        <body>
          <Main />
          <NextScript />
          <script defer src="https://platform.twitter.com/widgets.js" charSet="utf-8"></script>
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
