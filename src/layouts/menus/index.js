import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { useStyles } from './styles';
import clsx from 'clsx';
import Cookies from 'js-cookie';

const StyledButton = withStyles({
  root: {
    borderRadius: 3,
    background: 'none',
    color: '#aaa',
    height: 38,
    margin: 5,
    padding: '0 20px',
  },
})(Button);

const StyledButtonFooter = withStyles({
  root: {
    background: 'none',
    color: 'rgba(255,255,255,0.4)',
    height: 28,
    margin: 5,
    padding: '0 ',
  },
})(Button);

export function AppMenu({ handleDrawerOpen, open }) {
  const classes = useStyles();

  return (
    <IconButton
      color="inherit"
      aria-label="open drawer"
      onClick={() => {
        handleDrawerOpen();
      }}
      edge="start"
      className={clsx(classes.menuButton, open && classes.hide)}
    >
      <MenuIcon color="primary" />
    </IconButton>
  );
}

export function PublicMenu({ history }) {
  const authToken = Cookies.get('token');
  const classes = useStyles();

  return (
    <div className={classes.menuWrapperMobile}>
      <a href="https://doodlemeeple.com" style={{ textDecoration: 'none' }}>
        <StyledButton>Home</StyledButton>
      </a>
      {authToken && (
        <StyledButton
          onClick={() => {
            history.push(`/app/dashboard`);
          }}
        >
          Dashboard
        </StyledButton>
      )}
      {authToken ? (
        <StyledButton
          onClick={() => {
            Cookies.remove('token');
            history.push(`/`);
          }}
        >
          Logout
        </StyledButton>
      ) : (
        <Link to="/login" style={{ textDecoration: 'none' }}>
          <StyledButton>Login</StyledButton>
        </Link>
      )}
    </div>
  );
}

export function PublicFooterMenu() {
  const classes = useStyles();
  return (
    <div className={classes.menuWrapperMobile}>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Register</StyledButtonFooter>
      </Link>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Terms of Service</StyledButtonFooter>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Privacy</StyledButtonFooter>
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Contact</StyledButtonFooter>
      </Link>
    </div>
  );
}
