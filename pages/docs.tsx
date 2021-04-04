import { NextPage, GetStaticProps } from 'next'
import {
  Box,
  Container,
  Typography,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Drawer } from '../components/drawer'
import { Topic } from '../types'
import { topics } from './api/mock/topics'

const useStyles = makeStyles(theme => createStyles({
  content: {
    flexGrow: 1,
  }
}))

interface DocsProps {
  topics: Topic[]
}

const Docs: NextPage<DocsProps> = ({ topics }) => {
  const classes = useStyles()

  return (
    <Box display='flex'>
      <Drawer topics={topics} />
      <main className={classes.content}>
        <Container>
          <Typography variant='h3'>Hello, World!</Typography>
        </Container>
      </main>
    </Box>
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
