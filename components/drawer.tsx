import _ from 'lodash'
import { useState } from 'react'
import {
  Drawer as MuiDrawer,
  Hidden,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { Topic } from '../types'
import { NavMenu } from './nav/menu'

const DRAWER_WIDTH = 240

const useStyles = makeStyles(theme => createStyles({
  drawer: {
    width: DRAWER_WIDTH,
    flexShrink: 0,
  },
  drawerPaper: {
    width: DRAWER_WIDTH,
  },
}))

interface DrawerProps {
  topics: Topic[]
}

export const Drawer: React.FC<DrawerProps> = ({ topics }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hidden smDown implementation='css'>
        <MuiDrawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          variant='permanent'
          anchor='left'
          open
        >
          <NavMenu topics={topics} />
        </MuiDrawer>
      </Hidden>
      <Hidden mdUp implementation='css'>
        <MuiDrawer
          className={classes.drawer}
          classes={{
            paper: classes.drawerPaper,
          }}
          ModalProps={{
            keepMounted: true,
          }}
          variant='temporary'
          anchor='left'
          open={open}
          onClose={() => setOpen(false)}
        >
          <NavMenu topics={topics} />
        </MuiDrawer>
      </Hidden>
    </>
  )
}
