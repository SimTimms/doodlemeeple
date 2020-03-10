import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import HomeIcon from '@material-ui/icons/Home';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceWallet';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import useMediaQuery from '@material-ui/core/useMediaQuery';
/*
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import ExtensionIcon from '@material-ui/icons/Extension';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
*/

import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import Cookies from 'js-cookie';
import clsx from 'clsx';

export function AppDrawer(props) {
  const {
    drawer,
    link,
    drawerHeader,
    drawerMobile,
    drawerHeaderMobile,
  } = useStyles();
  const { handleDrawerClose, open } = props;
  const theme = useTheme();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Drawer
      classes={{ paper: !mobile ? drawer : drawerMobile }}
      variant="persistent"
      anchor="left"
      open={open}
    >
      <div
        className={clsx({
          [drawerHeader]: !mobile,
          [drawerHeaderMobile]: mobile,
        })}
        onClick={handleDrawerClose}
      >
        <IconButton>
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
          } /*
          {
            name: 'Invites',
            icon: <MailIcon />,
            link: '/app/invites',
          },
          { name: 'Jobs', icon: <WorkIcon />, link: '/roles/my-roles' },
          { name: 'My Games', icon: <ExtensionIcon />, link: '/app/projects' },
          {
            name: 'Messages',
            icon: <QuestionAnswerIcon />,
            link: '/messages/conversations',
          },*/,
        ].map((text, index) => (
          <Link to={text.link} className={link} key={text.name}>
            <ListItem button>
              <ListItemIcon style={{ minWidth: 32 }}>{text.icon}</ListItemIcon>
              <ListItemText primary={text.name} />
            </ListItem>
          </Link>
        ))}
        <ListItem button>
          <ListItemIcon style={{ minWidth: 32 }}>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText primary="Website & Blog" />
        </ListItem>
        <ListItem
          button
          onClick={() => {
            Cookies.remove('token');
            props.history.push(`/`);
          }}
        >
          <ListItemIcon style={{ minWidth: 32 }}>
            <ExitToAppIcon />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
