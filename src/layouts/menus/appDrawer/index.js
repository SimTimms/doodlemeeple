import React from 'react';
import { useTheme } from '@material-ui/core/styles';
import { Divider, Drawer, List, useMediaQuery } from '@material-ui/core';
import { useStyles } from '../styles';
import Cookies from 'js-cookie';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { COUNTS } from '../../../data/queries';
import logo from '../../../assets/dm_device.png';
import { MenuButtonShortcut } from '../../../components';

export default function AppDrawer({
  history,
  handleDrawerClose,
  handleDrawerOpen,
  open,
  ...props
}) {
  const { drawerOpen, drawerOpenMobile, drawerRoot } = useStyles();

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
        [drawerOpen]: true && !mobile,
      })}
      classes={{
        paper: clsx({
          [drawerRoot]: true,
          [drawerOpenMobile]: open && mobile,
          [drawerOpen]: !mobile,
        }),
      }}
    >
      <img
        src={logo}
        style={{
          maxHeight: 37,
          maxWidth: 34,
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingBottom: 11,
        }}
        alt="DoodleMeeple Man"
      />
      <Divider />
      <List>
        {page !== 'dashboard' && (
          <div>
            {[
              {
                name: 'Back',
                icon: 'chevron_left',
                link: () => {
                  history.goBack();
                },
                color: '#444',
                count: null,
              },
            ].map((text, index) => (
              <MenuButtonShortcut
                text={{
                  name: text.name,
                  color: text.color,
                  icon: text.icon,
                  count: text.count,
                }}
                onClickEvent={() => {
                  text.link();
                  handleDrawerClose();
                }}
                active={false}
              />
            ))}
          </div>
        )}
        <div>
          {[
            {
              name: 'Dashboard',
              icon: 'home',
              link: () => history.push('/app/dashboard'),
              color: '#444',
              count: null,
            } /*
            {
              name: 'Messages',
              icon: 'chat',
              link: () => history.push('/messages/conversations'),
              color: '#444',
              count: counts.messages,
            },*/,
            {
              name: 'Invites',
              icon: 'thumb_up',
              link: () => history.push('/app/invites'),
              color: '#444',
              count: counts.invites,
            },

            {
              name: profile.creatorTrue ? 'Projects' : 'hide',
              icon: 'work',
              link: () => history.push('/app/jobs'),
              color: '#444',
              count: null,
            },
            {
              name: 'Profile',
              icon: 'contact_mail',
              link: () => history.push('/app/edit-profile'),
              color: '#444',
              count: profile.profileBG ? null : 1,
            },
            {
              name: 'Account',
              icon: 'account_balance',
              link: () => history.push('/app/account'),
              color: '#444',
              count: null,
            } /*
            {
              name: 'Games',
              icon: 'casino',
              link: () => history.push('/app/games'),
              color: '#444',
              count: null,
            },*/,
            {
              name: 'Logout',
              icon: 'exit_to_app',
              link: () => {
                Cookies.remove('token');
                Cookies.remove('userId');
                history.replace(`/`);
              },
              color: theme.palette.error.main,
              count: null,
            },
          ].map(
            (text, index) =>
              text.name !== 'hide' && (
                <MenuButtonShortcut
                  text={{
                    name: text.name,
                    color: text.color,
                    icon: text.icon,
                    count: text.count,
                  }}
                  onClickEvent={() => {
                    text.link();
                    handleDrawerClose();
                  }}
                  active={false}
                />
              )
          )}
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
