import React from 'react';
import { Drawer } from '@material-ui/core';
import { useStyles } from '../styles';
import DmDevice from './DmDevice';

export default function BlankDrawer() {
  const { drawerOpenTablet, drawerRoot, drawerClosed } = useStyles();

  return (
    <Drawer
      variant="permanent"
      classes={{
        paper: drawerRoot,
      }}
    >
      <DmDevice isOpen={true} setIsOpen={null} />
    </Drawer>
  );
}
