import Head from 'next/head'
import styles from '../styles/Home.module.css'
import {
  Card,
  CardContent,
  Container,
  Grid,
  Link,
  Typography,
} from '@mui/material'

export default function Home() {
  return (
    <Container maxWidth='sm'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Typography variant='h3'>
          Welcome to <Link href='https://nextjs.org'>Next.js!</Link>
        </Typography>

        <Typography variant='subtitle1'>
          Get started by editing{' '}
          <code className={styles.code}>pages/index.tsx</code>
        </Typography>

        <Grid container spacing={2}>
          <Grid item md={6}>
            <Card>
              <CardContent>
                <Link href='https://nextjs.org/docs'>
                  <Typography variant='h5'>Documentation &rarr;</Typography>
                  <Typography>Find in-depth information about Next.js features and API.</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card>
              <CardContent>
                <Link href='https://nextjs.org/learn'>
                  <Typography variant='h5'>Learn &rarr;</Typography>
                  <Typography>Learn about Next.js in an interactive course with quizzes!</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card>
              <CardContent>
                <Link href='https://github.com/vercel/next.js/tree/master/examples'>
                  <Typography variant='h5'>Examples &rarr;</Typography>
                  <Typography>Discover and deploy boilerplate example Next.js projects.</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>

          <Grid item md={6}>
            <Card>
              <CardContent>
                <Link href='https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'>
                  <Typography variant='h5'>Deploy &rarr;</Typography>
                  <Typography>Instantly deploy your Next.js site to a public URL with Vercel.</Typography>
                </Link>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </main>

      <footer className={styles.footer}>
        <Link
          href='https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app'
          target='_blank'
          rel='noopener noreferrer'
        >
          Powered by{' '}
          <img src='/vercel.svg' alt='Vercel Logo' className={styles.logo} />
        </Link>
      </footer>
    </Container>
  )
}
