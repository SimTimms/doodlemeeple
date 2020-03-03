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
/*
import MailIcon from '@material-ui/icons/Mail';
import WorkIcon from '@material-ui/icons/Work';
import ExtensionIcon from '@material-ui/icons/Extension';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
*/
import DashboardIcon from '@material-ui/icons/Dashboard';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import AccountBalanceIcon from '@material-ui/icons/AccountBalanceWallet';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import Cookies from 'js-cookie';

export function AppDrawer(props) {
  const { drawer, drawerPaper, link, drawerHeader } = useStyles();
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
        <a
          href="https://doodlemeeple.com"
          style={{
            textDecoration: 'none',
            color: '#444',
          }}
        >
          <ListItem button>
            <ListItemIcon style={{ minWidth: 32 }}>
              <HomeIcon />
            </ListItemIcon>
            <ListItemText primary="Website & Blog" />
          </ListItem>
        </a>
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
