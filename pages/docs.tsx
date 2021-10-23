import { NextPage, GetStaticProps } from 'next'
import {
  Box,
  Container,
  Typography,
} from '@mui/material'
import { styled } from '@mui/material/styles'
import { Drawer } from '../components/drawer'
import { Topic } from '../types'
import { topics } from './api/mock/topics'

const PREFIX = 'Docs'
const classes = {
  content: `${PREFIX}-content`
}
const Main = styled('main')(({ theme }) => ({
  [`& .${classes.content}`]: {
    flexGrow: 1
  }
}))

export interface DocsProps {
  topics: Topic[]
}

const Docs: NextPage<DocsProps> = ({ topics }) => {
  return (
    <>
      <Drawer topics={topics} />
      <Main className={classes.content}>
        <Container>
          <Typography variant='h3'>Hello, World!</Typography>
        </Container>
      </Main>
    </>
  )
}

export default Docs

export const getStaticProps: GetStaticProps<DocsProps> = async (context) => {
  return {
    props: {
      topics,
    },
  }
}
