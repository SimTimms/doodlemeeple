import React from 'react';
import { styles } from './styles';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.svg';
const drawerWidth = 240;

export const useStyles = makeStyles(theme => ({
  root: {
    background: '#fff',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
}));

function NavBar(props) {
  const { children, open, title } = props;
  const classes = useStyles();

  return (
    <AppBar
      position="fixed"
      className={`${clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })} ${classes.root}`}
    >
      <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Link to="/" style={{ maxWidth: 326, width: '100%', lineHeight: 0.6 }}>
          <img src={logo} alt="DoodleMeeple Man next to DoodleMeeple Text" />
        </Link>
        {children}
      </Toolbar>
    </AppBar>
  );
}

export const StyledNavBar = withStyles({
  root: {
    background: '#fff',
  },
})(NavBar);

export function Content(props) {
  const classes = styles();
  return <div className={clsx(classes.content)}>{props.children}</div>;
}
