import _ from 'lodash'
import { useState } from 'react'
import {
  Collapse,
  List,
  ListItemButton,
  ListItemText,
} from '@mui/material'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import { Topic } from '../../types'

interface NavMenuProps {
  topics: Topic[]
}

export const NavMenu: React.FC<NavMenuProps> = ({ topics }) => {
  return (
    <List component='nav'>
      {topics.map(topic => <TopicNav key={_.kebabCase(topic.name)} topic={topic} />)}
    </List>
  )
}

interface TopicNavProps {
  topic: Topic
}

const TopicNav: React.FC<TopicNavProps> = ({ topic }) => {
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(open => !open)

  return (
    <>
      <ListItemButton onClick={toggleOpen}>
        <ListItemText primary={topic.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} unmountOnExit>
        <List component='div' disablePadding>
          {topic.articles.map(article => (
            <ListItemButton key={article.id} sx={{ pl: 4 }}>
              <ListItemText primary={article.title} />
            </ListItemButton>
          ))}
        </List>
      </Collapse>
    </>
  )
}
