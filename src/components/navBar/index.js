import React from 'react';
import { useMediaQuery, Toolbar, AppBar } from '@material-ui/core';
import clsx from 'clsx';
import { useStyles } from './styles';

function StyledNavBar(props) {
  const { children, open, center, sidebarMissing } = props;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <AppBar
      position="relative"
      className={`${clsx({
        [classes.appBar]: !mobile,
        [classes.appBarMobile]: mobile,
        [classes.appBarShift]: true,
        [classes.appBarShiftMobile]: mobile && open,
        [classes.appBarNoSidebar]: sidebarMissing,
      })} ${classes.root}`}
    >
      <Toolbar
        style={{
          display: 'flex',
          justifyContent: center ? 'center' : 'space-between',
        }}
      >
        <div
          className={clsx({
            [classes.appBarChild]: !mobile,
            [classes.appBarChildMobile]: mobile,
          })}
          style={{
            justifyContent: center ? 'center' : 'space-between',
          }}
        >
          {children}
        </div>
      </Toolbar>
    </AppBar>
  );
}

export default StyledNavBar;
