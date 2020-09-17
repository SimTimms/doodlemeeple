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
} from '@material-ui/core';
import { useStyles } from '../styles';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { COUNTS } from '../../../data/queries';
import logo from '../../../assets/dm_device.png';
import { MenuButton } from '../../../components';

export function AppDrawer({
  history,
  handleDrawerClose,
  handleDrawerOpen,
  open,
  ...props
}) {
  const {
    button,
    buttonMobile,
    drawerOpen,
    drawerOpenMobile,
    drawerClose,
    drawerCloseMobile,
    drawerRoot,
  } = useStyles();

  const { page, profile } = props;
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
      {page !== 'dashboard' && <Divider />}
      <List>
        {page !== 'dashboard' && <Divider /> && (
          <div>
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
              <MenuButton
                text={text}
                key={text.name}
                onClickEvent={() => {
                  text.link();
                  handleDrawerClose();
                }}
              />
            ))}
          </div>
        )}
        <div>
          {[
            {
              name: 'Dashboard',
              icon: <Icon>home</Icon>,
              link: () => history.push('/app/dashboard'),
              color: theme.palette.primary.main,
              count: null,
            },
            {
              name: 'Messages',
              icon: <Icon>chat</Icon>,
              link: () => history.push('/messages/conversations'),
              color: theme.palette.primary.main,
              count: counts.messages,
            },
            {
              name: 'Invites',
              icon: <Icon>thumb_up</Icon>,
              link: () => history.push('/app/invites'),
              color: theme.palette.primary.main,
              count: counts.invites,
            },

            {
              name: 'Projects',
              icon: <Icon>work</Icon>,
              link: () => history.push('/app/jobs'),
              color: theme.palette.primary.main,
              count: null,
            },
            {
              name: 'Profile',
              icon: <Icon>contact_mail</Icon>,
              link: () => history.push('/app/edit-profile'),
              color: theme.palette.primary.main,
              count: profile.profileBG ? null : 1,
            },
            {
              name: 'Account',
              icon: <Icon>account_balance</Icon>,
              link: () => history.push('/app/account'),
              color: theme.palette.primary.main,
              count: null,
            } /*
            {
              name: 'Games',
              icon: <Icon>casino</Icon>,
              link: () => history.push('/app/games'),
              color: theme.palette.primary.main,
              count: null,
            },*/,
            {
              name: 'Logout',
              icon: <Icon>exit_to_app</Icon>,
              link: () => {
                Cookies.remove('token');
                Cookies.remove('userId');
                history.replace(`/`);
              },
              color: theme.palette.error.main,
              count: null,
            },
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

          <ListItem
            button
            onClick={open ? handleDrawerClose : handleDrawerOpen}
            style={{ paddingLeft: 14 }}
          >
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
        </div>
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
