import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import { useStyles } from './styles';

export function StyledNavBar(props) {
  const { children, open, menu } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={`${clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })} ${classes.root}`}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        {menu}
        <div className={classes.appBarChild}>
          <Link
            to="/"
            style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}
          >
            <img src={logo} alt="DoodleMeeple Man next to DoodleMeeple Text" />
          </Link>
          {children}
        </div>
      </Toolbar>
    </AppBar>
  );
}
