import React from 'react'
import type { AppProps /*, AppContext */ } from 'next/app'
import '../styles/globals.css'

function MyApp({ Component, pageProps }: AppProps): React.ReactNode {
  return <Component {...pageProps} />
}

export default MyApp
