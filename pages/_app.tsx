import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import theme from '../styles/theme'
import cache from '../styles/cache'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component, pageProps, emotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache ?? cache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
