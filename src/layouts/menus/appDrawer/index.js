import React, { useEffect } from 'react';
import { Divider, Drawer, List, useMediaQuery } from '@material-ui/core';
import { useStyles } from '../styles';
import clsx from 'clsx';
import { MenuButtonShortcut } from '../../../components';
import menuArray from '../../menuArray';
import DmDevice from './DmDevice';
import { CountContext, HistoryContext } from '../../../context';

export default function AppDrawer({
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

  useEffect(() => {
    setPage(activeButton);
  }, [activeButton]);

  return (
    <HistoryContext.Consumer>
      {(history) => (
        <CountContext.Consumer>
          {(counts) => {
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
                  {menuArray(history, counts).map(
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
                </List>
              </Drawer>
            );
          }}
        </CountContext.Consumer>
      )}
    </HistoryContext.Consumer>
  );
}
