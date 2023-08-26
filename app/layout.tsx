import { Metadata } from 'next'
import Script from 'next/script'
import React, { Suspense } from 'react'
import { googleTagManagerId } from '@/utils/gtm'
import { metaData } from '@/const/metaData'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/app/_components/GoogleTagManager'
import { existsGaId, GA_TRACKING_ID } from 'lib/gtag'
import '@/styles/globals.scss'

export const metadata: Metadata = {
  viewport: 'width=device-width,initial-scale=1',
  title: {
    default: metaData.title,
    template: `%s | ${metaData.title}`
  },
  description: metaData.description,
  openGraph: {
    type: 'website',
    title: {
      default: metaData.title,
      template: `%s | ${metaData.title}`
    },
    description: metaData.description,
    siteName: metaData.title,
    url: process.env.NEXT_PUBLIC_DOMAIN,
    images: [{
      url: `${process.env.NEXT_PUBLIC_DOMAIN}${metaData.ogpImage}`
    }],
    locale: 'ja_JP'
  },
  alternates: {
    canonical: `${process.env.NEXT_PUBLIC_DOMAIN}`,
    types: {
      'application/rss+xml': [
        {
          url: `${process.env.NEXT_PUBLIC_DOMAIN}/rss/feed.xml`,
          title: `${metaData.title}`
        },
      ],
    },
  },
  referrer: 'origin-when-cross-origin',
  formatDetection:{
    email: false,
    address: false,
    telephone: false
  },
  icons: ['/favicon.ico']
}

export default function RootLayout({ children }: { children: React.ReactNode }): JSX.Element {
  return (
    <html lang="ja">
      <head>
        <link rel="dns-prefetch" href="//platform.twitter.com" />
        <link rel="dns-prefetch" href="//connect.facebook.net" />
        <link rel="dns-prefetch" href="//www.googletagmanager.com" />
        <link rel="dns-prefetch" href="//static.xx.fbcdn.net" />
        <link rel="dns-prefetch" href="//pagead2.googlesyndication.com" />
        <link rel="dns-prefetch" href="//googleads.g.doubleclick.net" />
        <script
          data-ad-client="ca-pub-7461708163833457"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        />
      </head>
      <body>
        <Suspense>
          {googleTagManagerId &&
            <GoogleTagManager googleTagManagerId={googleTagManagerId as GoogleTagManagerId} />
          }
        </Suspense>
        {googleTagManagerId &&
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
        }
        {children}
        <Script
          defer
          src="https://platform.twitter.com/widgets.js"
        />
        <Script
          defer
          crossOrigin="anonymous"
          src="https://connect.facebook.net/ja_JP/sdk.js#xfbml=1&version=v8.0&appId=1489772551268544&autoLogAppEvents=1"
          nonce="FYgc9evc"
        />
        {/* Global Site Tag (gtag.js) - Google Analytics */}
        {existsGaId ? (
          <>
            <Script
              async
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_TRACKING_ID}`}
            />
            <Script
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
    </html>
  )
}
