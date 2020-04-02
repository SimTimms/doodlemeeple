import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.svg';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import clsx from 'clsx';
import { useStyles } from './styles';

function StyledNavBar(props) {
  const { children, open, menu } = props;
  const classes = useStyles();
  const mobile = useMediaQuery('(max-width:800px)');

  return (
    <AppBar
      position="fixed"
      className={`${clsx({
        [classes.appBar]: !mobile,
        [classes.appBarMobile]: mobile,
        [classes.appBarShift]: open,
        [classes.appBarShiftMobile]: mobile && open,
      })} ${classes.root}`}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        {menu}
        <div
          className={clsx({
            [classes.appBarChild]: !mobile,
            [classes.appBarChildMobile]: mobile,
          })}
        >
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

export default StyledNavBar;
