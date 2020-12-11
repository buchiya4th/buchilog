import React, { useEffect } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { useRouter } from "next/router"
import * as gtag from 'lib/gtag'
import { CacheProvider } from '@emotion/core'
import { Global, css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'
import '@/styles/globals.scss'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

type Props = {
}

function MyApp({ Component, pageProps }: AppProps): Props {
  const globalStyle = css({
    '*, *::before, *::after': {
      boxSizing: 'border-box',
    },
    'body': {
      margin: 0,
      fontFamily: fonts.fontFamily.base,
      fontSize: size(2),
      lineHeight: 1.6,
      color: colors.gray.darker,
      letterSpacing: '0.1em',
      fontVariantNumeric: 'lining-nums',
      fontFeatureSettings: '"palt", "lnum"',
      textAlign: 'justify',
    },
    'a': {
      color: colors.link.main,
      '&:hover': {
        textDecoration: 'none',
      }
    },
    'img': {
      maxWidth: '100%',
      height: 'auto',
      verticalAlign: 'top',
    }
  })

  const router = useRouter()

  useEffect(() => {
    const handleRouteChange = (url: URL) => {
      gtag.pageview(url)
    }
    router.events.on("routeChangeComplete", handleRouteChange)
    return () => {
      router.events.off("routeChangeComplete", handleRouteChange)
    }
  }, [router.events])

  return (
    <CacheProvider value={cache}>
      <Global styles={globalStyle} />
      <Component {...pageProps} />
    </CacheProvider>
  )
}

export default MyApp
