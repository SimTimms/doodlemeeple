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
  Typography,
} from '@material-ui/core';
import { Link } from 'react-router-dom';
import { useStyles } from '../styles';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { COUNTS } from '../../../data/queries';

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
    countsStyle,
    wrapperFour,
  } = useStyles();

  const { handleDrawerClose, open, page } = props;
  const theme = useTheme();
  const mobile = useMediaQuery('(max-width:800px)');
  const [counts, setCounts] = React.useState({ invites: 0, messages: 0 });

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
      {page === 'edit-game' && <Divider />}
      {page === 'edit-game' && (
        <List>
          {[
            {
              name: 'Games',
              icon: <Icon>chevron_left</Icon>,
              link: '/app/games',
              color: '#444',
              count: null,
            },
          ].map((text, index) => (
            <Link
              to={text.link}
              className={link}
              key={text.name}
              onClick={handleDrawerClose}
            >
              <ListItem button style={{ paddingLeft: 10 }}>
                <div className={wrapperFour}>
                  <ListItemIcon
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      position: 'relative',
                    }}
                  >
                    {text.icon}
                  </ListItemIcon>
                  {text.count !== null && text.count > 0 && (
                    <Typography
                      variant="body1"
                      component="p"
                      className={countsStyle}
                    >
                      {text.count}
                    </Typography>
                  )}
                </div>
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
        </List>
      )}
      <List>
        {[
          {
            name: 'Dashboard',
            icon: <Icon>home</Icon>,
            link: '/app/dashboard',
            color: '#444',
            count: null,
          },
          {
            name: 'Profile',
            icon: <Icon>contact_mail</Icon>,
            link: '/app/edit-profile',
            color: '#444',
            count: null,
          },
          {
            name: 'Account',
            icon: <Icon>account_balance</Icon>,
            link: '/app/account',
            color: '#444',
            count: null,
          },
          {
            name: 'Games',
            icon: <Icon>casino</Icon>,
            link: '/app/games',
            color: '#444',
            count: null,
          },
          {
            name: 'Projects',
            icon: <Icon>work</Icon>,
            link: '/app/jobs',
            color: '#444',
            count: null,
          } /*
          {
            name: 'Invites',
            icon: <MailIcon />,
            link: '/app/invites',
          },
          { name: 'My Games', icon: <ExtensionIcon />, link: '/app/projects' },
       
          {
            name: 'Invites (Beta)',
            icon: <Icon>thumb_up</Icon>,
            link: '/app/invites',
            color: '#444',
            count: counts.invites,
          },
          {
            name: 'Messages (Beta)',
            icon: <Icon>chat</Icon>,
            link: '/messages/conversations',
            color: '#444',
            count: counts.messages,
          }*/,
          ,
        ].map((text, index) => (
          <Link
            to={text.link}
            className={link}
            key={text.name}
            onClick={handleDrawerClose}
          >
            <ListItem button style={{ paddingLeft: 10 }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  minWidth: 32,
                  maxWidth: 32,
                  maxHeight: 32,
                  minHeight: 32,
                  background: text.color,
                  borderRadius: '50%',
                  marginRight: 20,
                  position: 'relative',
                }}
              >
                <ListItemIcon
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    position: 'relative',
                  }}
                >
                  {text.icon}
                </ListItemIcon>
                {text.count !== null && text.count > 0 && (
                  <Typography
                    variant="body1"
                    component="p"
                    className={countsStyle}
                  >
                    {text.count}
                  </Typography>
                )}
              </div>
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
        <a
          href="https://doodlemeeple.com"
          style={{ textDecoration: 'none' }}
          target="_blank"
          rel="noopener noreferrer"
        >
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
            Cookies.remove('userId');
            props.history.replace(`/`);
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
      <Query
        query={COUNTS}
        onCompleted={(data) => {
          setCounts({
            invites: data.counts.invites,
            messages: data.counts.messages,
          });
        }}
        fetchPolicy="network-only"
      >
        {({ data }) => {
          return null;
        }}
      </Query>
    </Drawer>
  );
}
