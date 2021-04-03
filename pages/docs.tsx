import React, { useState } from 'react'
import { NextPage } from 'next'
// import Link from 'next/link'
import {
  Box,
  Collapse,
  Container,
  Drawer,
  Link,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@material-ui/core'

import { createStyles, makeStyles } from '@material-ui/core/styles'

const DRAWER_WIDTH = 240

const useStyles = makeStyles(theme => createStyles({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
  nestedListItem: {
    paddingLeft: theme.spacing(4),
  },
  content: {
    flexGrow: 1,
  }
}))

interface DocsProps {

}

const Docs: NextPage<DocsProps> = () => {
  const classes = useStyles()
  const [open, setOpen] = useState(true)

  return (
    <Box display='flex'>
      <Drawer
        className={classes.drawer}
        classes={{
          paper: classes.drawerPaper,
        }}
        variant='permanent'
        anchor='left'
      >
        <List component='nav'>
          <ListItem button>
            <ListItemText primary='foo' />
          </ListItem>
          <ListItem button>
            <Link href='#bar'>
              <ListItemText primary='bar' />
            </Link>
          </ListItem>
        </List>
        <Collapse in={open}>
          <List component='div' disablePadding>
            <ListItem button className={classes.nestedListItem}>
              <ListItemText>baz</ListItemText>
            </ListItem>
          </List>
        </Collapse>
      </Drawer>
      <main className={classes.content}>
        <Container>
          <Typography variant='h3'>Hello, World!</Typography>
        </Container>
      </main>
    </Box>
  )
}

export default Docs