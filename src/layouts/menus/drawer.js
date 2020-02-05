import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { useStyles } from './styles';

export function AppDrawer(props) {
  const classes = useStyles();
  const { handleDrawerClose, open } = props;
  const theme = useTheme();

  return (
    <Drawer
      className={classes.drawer}
      variant="persistent"
      anchor="left"
      open={open}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <div className={classes.drawerHeader}>
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
          { name: 'Home', icon: <InboxIcon />, link: '/' },
          { name: 'Dashboard', icon: <InboxIcon />, link: '/app/dashboard' },
          { name: 'Profile', icon: <MailIcon />, link: '/app/profile' },
          { name: 'Account', icon: <MailIcon />, link: '/app/account' },
          { name: 'Invites', icon: <MailIcon />, link: '/app/invites' },
          { name: 'Jobs', icon: <MailIcon />, link: '/app/jobs' },
          { name: 'My Games', icon: <MailIcon />, link: '/app/projects' },
          { name: 'Messages', icon: <MailIcon />, link: '/app/messages' },
        ].map((text, index) => (
          <Link to={text.link} className={classes.link} key={text.name}>
            <ListItem button>
              <ListItemIcon>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
      </List>
      <Divider />
    </Drawer>
  );
}
