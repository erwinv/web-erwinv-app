import React from 'react'
import { NextPage } from 'next'
import {
  Collapse,
  Container,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'

interface DocsProps {

}

const Docs: NextPage<DocsProps> = () => {
  return (
    <>
      <Drawer variant='permanent' anchor='left'>
        <List>
          <ListItem button>
            <ListItemText primary='foo' />
          </ListItem>
          <ListItem button>
            <ListItemText primary='bar' />
          </ListItem>
        </List>
      </Drawer>
      <Container>
        <main>
          <Typography variant='h3'>Hello, World!</Typography>
        </main>
      </Container>
    </>
  )
}

export default Docs