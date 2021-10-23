import { useState } from 'react'
import { Drawer as MuiDrawer } from '@mui/material'
import { Topic } from '../types'
import { NavMenu } from './nav/menu'

export const drawerWidth = 240

interface DrawerProps {
  topics: Topic[]
}

export const Drawer: React.FC<DrawerProps> = ({ topics }) => {
  const [open, setOpen] = useState(true)

  return (
    <>
      <MuiDrawer
        variant='temporary'
        sx={{
          display: { sm: 'block', md: 'none' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
        anchor='left'
        open={open}
        onClose={() => setOpen(false)}
      >
        <NavMenu topics={topics} />
      </MuiDrawer>
      <MuiDrawer
        variant='permanent'
        sx={{
          display: { sm: 'none', md: 'block' },
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
          },
        }}
        anchor='left'
        open
      >
        <NavMenu topics={topics} />
      </MuiDrawer>
    </>
  )
}
