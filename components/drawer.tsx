import _ from 'lodash'
import { useState } from 'react'
import {
  Drawer as MuiDrawer,
  Hidden,
} from '@mui/material'
import { Topic } from '../types'
import { NavMenu } from './nav/menu'

const DRAWER_WIDTH = 240

interface DrawerProps {
  topics: Topic[]
}

export const Drawer: React.FC<DrawerProps> = ({ topics }) => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <Hidden smDown implementation='css'>
        <MuiDrawer
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
            },
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
          sx={{
            width: DRAWER_WIDTH,
            flexShrink: 0,
            '& .MuiDrawer-paper': {
              width: DRAWER_WIDTH,
            },
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
