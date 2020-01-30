import React from 'react';
import Button from '@material-ui/core/Button';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import IconButton from '@material-ui/core/IconButton';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';

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

export const useStyles = makeStyles(theme => ({
  root: {
    marginRight: theme.spacing(2),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
}));

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

export function PublicMenu() {
  return (
    <div>
      <Link to="/home" style={{ textDecoration: 'none' }}>
        <StyledButton>Home</StyledButton>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <StyledButton>Login</StyledButton>
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <StyledButton>Register</StyledButton>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <StyledButton>About</StyledButton>
      </Link>
      <StyledButton>Community</StyledButton>
    </div>
  );
}

export function PublicFooterMenu() {
  return (
    <div>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Login</StyledButtonFooter>
      </Link>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Register</StyledButtonFooter>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Disputes</StyledButtonFooter>
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
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>About</StyledButtonFooter>
      </Link>
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Community</StyledButtonFooter>
      </Link>{' '}
      <Link to="/about" style={{ textDecoration: 'none' }}>
        <StyledButtonFooter>Social</StyledButtonFooter>
      </Link>
    </div>
  );
}
