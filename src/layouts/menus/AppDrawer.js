import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import HomeIcon from '@material-ui/icons/Home';
import WorkIcon from '@material-ui/icons/Work';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceWallet';
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
          { name: 'Home', icon: <HomeIcon />, link: '/' },
          {
            name: 'Dashboard',
            icon: <DashboardIcon />,
            link: '/app/dashboard',
          },
          {
            name: 'Profile',
            icon: <ContactMailIcon />,
            link: '/app/edit-profile',
          },
          {
            name: 'Account',
            icon: <AccountBalanceIcon />,
            link: '/app/account',
          },
          { name: 'Invites', icon: <MailIcon />, link: '/app/invites' },
          { name: 'Jobs', icon: <WorkIcon />, link: '/roles/my-roles' },
          { name: 'My Games', icon: <MailIcon />, link: '/app/projects' },
          {
            name: 'Messages',
            icon: <MailIcon />,
            link: '/messages/conversations',
          },
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
