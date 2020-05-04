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
            color: '#444',
          },
          {
            name: 'Profile',
            icon: <Icon>contact_mail</Icon>,
            link: '/app/edit-profile',
            color: '#444',
          },
          {
            name: 'Account',
            icon: <Icon>account_balance</Icon>,
            link: '/app/account',
            color: '#444',
          },
          {
            name: 'Games',
            icon: <Icon>casino</Icon>,
            link: '/app/games',
            color: '#2d80ad',
          },
          {
            name: 'Jobs',
            icon: <Icon>work</Icon>,
            link: '/app/jobs',
            color: '#e34d4d',
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
            <ListItem button style={{ paddingLeft: 10 }}>
              <ListItemIcon
                style={{
                  minWidth: 32,
                  minHeight: 32,
                  background: text.color,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderRadius: '50%',
                  marginRight: 20,
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: '50%',
                    marginTop: 1,
                    color: '#fff',
                  }}
                >
                  {text.icon}
                </div>
              </ListItemIcon>
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
              <Icon style={{ minWidth: 32 }}>web_asset</Icon>
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
