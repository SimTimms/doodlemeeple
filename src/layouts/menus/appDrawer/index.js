import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import {
  Divider,
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
import logo from '../../../assets/dm_device.png';
import { MenuButton } from '../../../components';

export function AppDrawer(props) {
  const {
    link,
    button,
    buttonMobile,
    drawerOpen,
    drawerOpenMobile,
    drawerClose,
    drawerCloseMobile,
    countsStyle,
    wrapperFour,
    drawerRoot,
  } = useStyles();

  const { handleDrawerClose, handleDrawerOpen, open, page, history } = props;
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
        [drawerRoot]: true,
        [drawerOpenMobile]: open && mobile,
        [drawerOpen]: open && !mobile,
        [drawerCloseMobile]: !open && mobile,
        [drawerClose]: !open && !mobile,
      })}
      classes={{
        paper: clsx({
          [drawerRoot]: true,
          [drawerOpenMobile]: open && mobile,
          [drawerOpen]: open && !mobile,
          [drawerCloseMobile]: !open && mobile,
          [drawerClose]: !open,
        }),
      }}
    >
      <img
        src={logo}
        style={{
          maxHeight: 37,
          maxWidth: 34,
          marginLeft: 7,
          paddingBottom: 11,
        }}
        alt="DoodleMeeple Man"
      />
      <Divider />
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
            color: theme.palette.primary.main,
            count: null,
          },
          /*
          {
            name: 'Messages',
            icon: <Icon>chat</Icon>,
            link: () => history.push('/messages/conversations'),
            color: '#497b9e',
            count: counts.messages,
          },*/
          /*
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
            count: null,
          },*/
          {
            name: 'Profile',
            icon: <Icon>contact_mail</Icon>,
            link: () => history.push('/app/edit-profile'),
            color: theme.palette.secondary.main,
            count: null,
          },
          {
            name: 'Account',
            icon: <Icon>account_balance</Icon>,
            link: () => history.push('/app/account'),
            color: theme.palette.secondary.main,
            count: null,
          },
          /*
          {
            name: 'Games',
            icon: <Icon>casino</Icon>,
            link: () => history.push('/app/games'),
            color: '#c76a48',
            count: null,
          },*/
        ].map((text, index) => (
          <MenuButton
            text={text}
            key={text.name}
            onClickEvent={() => {
              text.link();
              handleDrawerClose();
            }}
          />
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
        <Divider />
        <ListItem button onClick={open ? handleDrawerClose : handleDrawerOpen}>
          <ListItemIcon style={{ minWidth: 32 }}>
            <Icon>{open ? 'chevron_left' : 'chevron_right'}</Icon>
          </ListItemIcon>
          <ListItemText
            primary="Minimise"
            className={clsx({
              [button]: !mobile,
              [buttonMobile]: mobile,
            })}
          />
        </ListItem>
      </List>
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
