import _ from 'lodash'
import { useState, Fragment } from 'react'
import {
  Collapse,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core'
import { createStyles, makeStyles } from '@material-ui/core/styles'
import { ExpandLess, ExpandMore } from '@material-ui/icons'
import { Topic } from '../../types'

const useStyles = makeStyles(theme => createStyles({
  nestedListItem: {
    paddingLeft: theme.spacing(4),
  },
}))

interface NavMenuProps {
  topics: Topic[]
}

export const NavMenu: React.FC<NavMenuProps> = ({ topics }) => {
  return (
    <List component='nav'>
      {topics.map(TopicNav)}
    </List>
  )
}

const TopicNav = (topic: Topic) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false)
  const toggleOpen = () => setOpen(open => !open)

  return (
    <Fragment key={_.kebabCase(topic.name)}>
      <ListItem button onClick={toggleOpen}>
        <ListItemText primary={topic.name} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open}>
        <List component='div' disablePadding>
          {topic.articles.map(article => (
            <ListItem key={article.id} button className={classes.nestedListItem}>
              <ListItemText primary={article.title} />
            </ListItem>
          ))}
        </List>
      </Collapse>
    </Fragment>
  )
}
