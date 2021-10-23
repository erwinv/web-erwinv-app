import Head from 'next/head'
import { styled } from '@mui/material/styles'
import {
  Container,
  Typography,
} from '@mui/material'

const PREFIX = 'Home'
const classes = {
  content: `${PREFIX}-content`
}
const Main = styled('main')(({ theme }) => ({
  [`& .${classes.content}`]: {
    paddingTop: theme.spacing(5),
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  }
}))

export default function Home() {
  return (
    <Container maxWidth='sm'>
      <Head>
        <title>Create Next App</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Typography variant='h3'>Hello, World!</Typography>
    </Container>
  )
}
