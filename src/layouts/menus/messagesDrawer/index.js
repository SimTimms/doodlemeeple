import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import Chat from '@material-ui/icons/Chat';
import ChevronLeft from '@material-ui/icons/ChevronLeft';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';

export function MessagesDrawer(props) {
  const { drawer, drawerPaper, drawerHeader, link, icon } = useStyles();
  const { handleDrawerClose, open } = props;
  const theme = useTheme();

  return (
    <Drawer
      className={drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: drawerPaper,
      }}
    >
      <div className={drawerHeader}>
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </div>
      <Divider />
      <List>
        {[
          { name: 'Back', icon: <ChevronLeft />, link: '/app/dashboard' },
          {
            name: 'Conversations',
            icon: <Chat />,
            link: '/messages/conversations',
          },
        ].map((text, index) => (
          <Link to={text.link} className={link} key={text.name}>
            <ListItem button>
              <ListItemIcon className={icon}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
