import React from 'react'
import NextApp from 'next/app'
import { CacheProvider } from '@emotion/core'
import { Global, css } from '@emotion/core'
import { colors, size, fonts } from '@/styles/index'
import '@/styles/globals.scss'

// Use only { cache } from 'emotion'. Don't use { css }.
import { cache } from 'emotion'

export default class App extends NextApp {
  render() {
    const { Component, pageProps } = this.props

    const globalStyle = css({
      '*, *::before, *::after': {
        boxSizing: 'border-box',
      },
      'body': {
        margin: 0,
        fontFamily: fonts.fontFamily.base,
        fontSize: size(2),
        lineHeight: 1.6,
        color: colors.gray.dark,
        letterSpacing: '0.1em',
        fontVariantNumeric: 'lining-nums',
        fontFeatureSettings: '"palt", "lnum"',
      },
      'a': {
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

    return (
      <CacheProvider value={cache}>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </CacheProvider>
    )
  }
}
