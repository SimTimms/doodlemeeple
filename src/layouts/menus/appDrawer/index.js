import React from 'react';
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
  const { drawerOpenTablet, drawerRoot } = useStyles();

  const { page, profile } = props;
  const mobile = useMediaQuery('(max-width:800px)');
  const [counts, setCounts] = React.useState({
    invites: 0,
    messages: 0,
    quotes: 0,
  });

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: clsx({
          [drawerRoot]: true,
          [drawerOpenTablet]: mobile,
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
                count: null,
              },
            ].map((text, index) => (
              <MenuButtonShortcut
                text={{
                  name: text.name,
                  color: '#222',
                  icon: text.icon,
                  count: text.count,
                }}
                onClickEvent={() => {
                  text.link();
                  handleDrawerClose();
                }}
                active={false}
                key={`shortcut_${index}`}
                countIcon="star"
              />
            ))}
          </div>
        )}
        <div>
          {[
            {
              name: 'Home',
              icon: 'home',
              link: () => history.push('/app/dashboard'),
              count: null,
            },
            {
              name:
                profile.creativeTrue || profile.creatorTrue
                  ? 'Messages'
                  : 'hide',
              icon: 'chat',
              link: () => history.push('/messages/conversations'),
              color: '',
              count:
                counts.messages > 0
                  ? { icon: 'local_post_office', count: counts.messages }
                  : { icon: 'mail', count: counts.messages },
            },
            {
              name: profile.creativeTrue ? 'Creative' : 'hide',
              icon: 'brush',
              link: () => history.push('/app/invites'),
              count: counts.invites > 0 && {
                icon: 'local_post_office',
                count: counts.invites,
              },
            },
            {
              name: profile.creatorTrue ? 'Creator' : 'hide',
              icon: 'work',
              link: () => history.push('/app/jobs'),
              count: { icon: 'star', count: counts.quotes },
            },
            {
              name: 'My Profile',
              icon: 'face',
              link: () => history.push('/app/edit-profile'),
              count: !profile.profileBG
                ? { icon: 'star', count: counts.quotes }
                : null,
            },
            {
              name: 'Account',
              icon: 'account_balance',
              link: () => history.push('/app/account'),
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
                localStorage.removeItem('featureArticle');
                localStorage.removeItem('posts');
                history.replace(`/`);
              },
              count: null,
            },
          ].map(
            (text, index) =>
              text.name !== 'hide' && (
                <MenuButtonShortcut
                  text={{
                    name: text.name,
                    color: '#222',
                    icon: text.icon,
                    count: text.count ? text.count.count : 0,
                  }}
                  onClickEvent={() => {
                    text.link();
                    handleDrawerClose();
                  }}
                  active={false}
                  key={`menu_${index}`}
                  countIcon={text.count ? text.count.icon : 'star'}
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
