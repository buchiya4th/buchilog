import React from 'react'
import NextDocument, { Html, Head, Main, NextScript, DocumentContext } from 'next/document'
import { existsGaId, GA_TRACKING_ID } from 'lib/gtag'
import { extractCritical } from 'emotion-server'

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
          <meta name="format-detection" content="telephone=no,email=no,address=no" />
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
