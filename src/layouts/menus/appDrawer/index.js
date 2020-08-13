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

  const { handleDrawerClose, open, page, history } = props;
  const theme = useTheme();
  const mobile = useMediaQuery('(max-width:800px)');
  const [counts, setCounts] = React.useState({
    invites: 0,
    messages: 0,
    quotes: 0,
  });

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
      {(page === 'edit-game' ||
        page === 'pick-artist' ||
        page === 'view-job') && <Divider />}
      {(page === 'edit-game' ||
        page === 'pick-artist' ||
        page === 'view-job') && (
        <List>
          {[
            {
              name: 'Back',
              icon: <Icon>chevron_left</Icon>,
              link: () => {
                history.goBack();
              },
              color: '#444',
              count: null,
            },
          ].map((text, index) => (
            <div
              className={link}
              key={text.name}
              onClick={() => {
                text.link();
                handleDrawerClose();
              }}
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
            </div>
          ))}
        </List>
      )}
      <List>
        {[
          {
            name: 'Dashboard',
            icon: <Icon>home</Icon>,
            link: () => history.push('/app/dashboard'),
            color: '#57499e',
            count: null,
          },
          {
            name: 'Messages',
            icon: <Icon>chat</Icon>,
            link: () => history.push('/messages/conversations'),
            color: '#497b9e',
            count: counts.messages,
          },
          {
            name: 'Invites',
            icon: <Icon>thumb_up</Icon>,
            link: () => history.push('/app/invites'),
            color: '#499e90',
            count: counts.invites,
          },
          {
            name: 'Projects',
            icon: <Icon>work</Icon>,
            link: () => history.push('/app/jobs'),
            color: '#469958',
            count: counts.quotes,
          },
          {
            name: 'Profile',
            icon: <Icon>contact_mail</Icon>,
            link: () => history.push('/app/edit-profile'),
            color: '#aebd53',
            count: null,
          },
          {
            name: 'Account',
            icon: <Icon>account_balance</Icon>,
            link: () => history.push('/app/account'),
            color: '#cca14b',
            count: null,
          },
          {
            name: 'Games',
            icon: <Icon>casino</Icon>,
            link: () => history.push('/app/games'),
            color: '#c76a48',
            count: null,
          },
        ].map((text, index) => (
          <div
            className={link}
            key={text.name}
            onClick={() => {
              text.link();
              handleDrawerClose();
            }}
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
          </div>
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
            quotes: data.counts.quotes,
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
