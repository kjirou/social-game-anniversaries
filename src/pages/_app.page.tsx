import type { AppProps } from 'next/app'
import Head from 'next/head'
import { ReactElement } from 'react'
import { GlobalStyles } from '../styles/global-styles'

export default function MyApp({Component, pageProps}: AppProps): ReactElement {
  return (
    <>
      <Head>
        <title>ソシャゲ記念日</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}
