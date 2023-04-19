import React, { useEffect } from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import { googleTagManagerId } from '@/utils/gtm'
import GoogleTagManager, {
  GoogleTagManagerId,
} from '@/src/components/GoogleTagManager'
import { useRouter } from "next/router"
import * as gtag from 'lib/gtag'
import '@/styles/globals.scss'

type Props = {
}

function MyApp({ Component, pageProps }: AppProps): Props {
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
    <>
      <GoogleTagManager googleTagManagerId={googleTagManagerId as GoogleTagManagerId} />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
