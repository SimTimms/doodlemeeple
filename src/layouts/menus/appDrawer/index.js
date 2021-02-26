import React from 'react';
import { Divider, Drawer, List, useMediaQuery } from '@material-ui/core';
import { useStyles } from '../styles';
import clsx from 'clsx';
import { Query } from 'react-apollo';
import { COUNTS } from '../../../data/queries';
import { MenuButtonShortcut } from '../../../components';
import menuArray from './menuArray';
import DmDevice from './DmDevice';

export default function AppDrawer({
  history,
  handleDrawerClose,
  handleDrawerOpen,
  open,
  ...props
}) {
  const { drawerOpenTablet, drawerRoot, drawerClosed } = useStyles();

  const { profile } = props;
  const mobile = useMediaQuery('(max-width:800px)');
  const [isOpen, setIsOpen] = React.useState(false);
  const [page, setPage] = React.useState('Tasks');
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
          [drawerClosed]: !isOpen && mobile,
        }),
      }}
    >
      <DmDevice isOpen={isOpen} setIsOpen={setIsOpen} />
      <Divider />
      <List onClick={() => setIsOpen(false)}>
        <div>
          {menuArray(history, counts, profile).map(
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
                    setPage(text.name);
                    text.link();
                    handleDrawerClose();
                  }}
                  active={text.name === page}
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
