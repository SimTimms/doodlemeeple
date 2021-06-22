import React, { useEffect } from 'react';
import { Divider, Drawer, List, useMediaQuery } from '@material-ui/core';
import { useStyles } from '../styles';
import clsx from 'clsx';
import { useQuery } from '@apollo/client';
import { COUNTS } from '../../../data/queries';
import { MenuButtonShortcut } from '../../../components';
import menuArray from './menuArray';
import DmDevice from './DmDevice';
import BlankDrawer from './blankDrawer';
import { ProfileContext } from '../../../context';

export default function AppDrawer({
  history,
  handleDrawerClose,
  handleDrawerOpen,
  open,
  ...props
}) {
  const { drawerOpenTablet, drawerRoot, drawerClosed } = useStyles();
  const { activeButton } = props;
  const mobile = useMediaQuery('(max-width:800px)');
  const [isOpen, setIsOpen] = React.useState(false);
  const [page, setPage] = React.useState('Tasks');
  const [counts, setCounts] = React.useState({
    invites: 0,
    messages: 0,
    quotes: 0,
  });

  const { loading, error, data } = useQuery(COUNTS, {
    onCompleted({ counts }) {
      setCounts({
        invites: counts.invites,
        messages: counts.messages,
        quotes: counts.quotes,
      });
    },
  });

  useEffect(() => {
    setPage(activeButton);
  }, [activeButton]);

  return (
    <ProfileContext.Consumer>
      {(profile) =>
        !profile ? (
          <BlankDrawer />
        ) : (
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
                          setPage(text.machineName);
                          text.link();
                          handleDrawerClose();
                        }}
                        active={text.machineName === page}
                        key={`menu_${index}`}
                        countIcon={text.count ? text.count.icon : 'star'}
                      />
                    )
                )}
              </div>
            </List>
          </Drawer>
        )
      }
    </ProfileContext.Consumer>
  );
}
