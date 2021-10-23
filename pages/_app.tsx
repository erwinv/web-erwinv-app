import React from 'react'
import { AppProps } from 'next/app'
import Head from 'next/head'
import CssBaseline from '@mui/material/CssBaseline'
import { ThemeProvider } from '@mui/material/styles'
import { CacheProvider, EmotionCache } from '@emotion/react'
import { Box, AppBar, Toolbar } from '@mui/material'
import theme from '../styles/theme'
import cache from '../styles/cache'
import Link from '../components/link'
import { drawerWidth } from '../components/drawer'

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache
}

function MyApp({ Component: Page, pageProps, emotionCache }: MyAppProps) {
  return (
    <CacheProvider value={emotionCache ?? cache}>
      <Head>
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box sx={{ display: 'flex' }}>
          <AppBar
            position='fixed'
            sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
          >
            <Toolbar>
              <Link href='/'>Home</Link>
              <Link href='/docs'>Docs (static)</Link>
              <Link href='/ssr/docs'>Docs (SSR)</Link>
            </Toolbar>
          </AppBar>
          <Page {...pageProps} />
        </Box>
      </ThemeProvider>
    </CacheProvider>
  )
}

export default MyApp
