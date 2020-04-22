import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  Divider,
  IconButton,
  Icon,
  Drawer,
  ListItem,
  ListItemIcon,
  ListItemText,
  List,
  useMediaQuery,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import Cookies from 'js-cookie';
import clsx from 'clsx';

export function AppDrawer(props) {
  const {
    link,
    drawerHeader,
    drawerHeaderMobile,
    button,
    buttonMobile,
    drawerOpen,
    drawerOpenMobile,
    drawerClose,
    drawerCloseMobile,
  } = useStyles();
  const { handleDrawerClose, open } = props;
  const theme = useTheme();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <Drawer
      variant="permanent"
      className={clsx({
        [drawerOpenMobile]: open && mobile,
        [drawerOpen]: open && !mobile,
        [drawerCloseMobile]: !open && mobile,
        [drawerClose]: !open && !mobile,
      })}
      classes={{
        paper: clsx({
          [drawerOpenMobile]: open && mobile,
          [drawerOpen]: open && !mobile,
          [drawerCloseMobile]: !open && mobile,
          [drawerClose]: !open,
        }),
      }}
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
            <Icon>chevron_left</Icon>
          ) : (
            <Icon>chevron_right</Icon>
          )}
        </IconButton>
      </div>
      <Divider />

      <List>
        {[
          {
            name: 'Dashboard',
            icon: <Icon>home</Icon>,
            link: '/app/dashboard',
          },
          {
            name: 'Profile',
            icon: <Icon>contact_mail</Icon>,
            link: '/app/edit-profile',
          },
          {
            name: 'Account',
            icon: <Icon>account_balance</Icon>,
            link: '/app/account',
          },
          {
            name: 'Jobs',
            icon: <Icon>work</Icon>,
            link: '/app/projects',
          } /*
          {
            name: 'Invites',
            icon: <MailIcon />,
            link: '/app/invites',
          },
         
          { name: 'My Games', icon: <ExtensionIcon />, link: '/app/projects' },
          {
            name: 'Messages',
            icon: <QuestionAnswerIcon />,
            link: '/messages/conversations',
          },*/,
        ].map((text, index) => (
          <Link
            to={text.link}
            className={link}
            key={text.name}
            onClick={handleDrawerClose}
          >
            <ListItem button>
              <ListItemIcon style={{ minWidth: 32 }}>{text.icon} </ListItemIcon>
              <ListItemText
                primary={text.name}
                className={clsx({
                  [button]: !mobile,
                  [buttonMobile]: mobile,
                })}
              />
            </ListItem>
          </Link>
        ))}
        <a href="https://doodlemeeple.com" style={{ textDecoration: 'none' }}>
          <ListItem button>
            <ListItemIcon style={{ minWidth: 32 }}>
              <Icon>web_asset</Icon>
            </ListItemIcon>
            <ListItemText
              primary="Website"
              className={clsx({
                [button]: !mobile,
                [buttonMobile]: mobile,
              })}
            />
          </ListItem>
        </a>
        <ListItem
          button
          onClick={() => {
            Cookies.remove('token');
            props.history.push(`/`);
          }}
        >
          <ListItemIcon style={{ minWidth: 32 }}>
            <Icon>exit_to_app</Icon>
          </ListItemIcon>
          <ListItemText
            primary="Logout"
            className={clsx({
              [button]: !mobile,
              [buttonMobile]: mobile,
            })}
          />
        </ListItem>
      </List>
      <Divider />
    </Drawer>
  );
}
