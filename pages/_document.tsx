import React from 'react'
import Document, {
  DocumentContext,
  Html,
  Head,
  Main,
  NextScript,
} from 'next/document'
import { ServerStyleSheets } from '@material-ui/core/styles'
import createEmotionServer from '@emotion/server/create-instance'
import theme from '../styles/theme'
import cache from '../styles/cache'

const { extractCritical } = createEmotionServer(cache)

export default class MyDocument<P> extends Document<P> {
  static async getInitialProps(ctx: DocumentContext) {
    const sheets = new ServerStyleSheets()

    const originalRenderPage = ctx.renderPage
    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => sheets.collect(<App {...props} />),
      })

    const initialProps = await super.getInitialProps(ctx)
    const styles = extractCritical(initialProps.html)

    return {
      ...initialProps,
      styles: [
        ...React.Children.toArray(initialProps.styles),
        sheets.getStyleElement(),
        <style
          key="emotion-style-tag"
          data-emotion={`css ${styles.ids.join(' ')}`}
          dangerouslySetInnerHTML={{ __html: styles.css }}
        />
      ],
    }
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <meta name="theme-color" content={theme.palette.primary.main} />
          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}
