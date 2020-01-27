import React from 'react';
import { styles } from './styles';
import { withStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import TextField from '@material-ui/core/TextField';
import Toolbar from '@material-ui/core/Toolbar';
import AppBar from '@material-ui/core/AppBar';
import { makeStyles } from '@material-ui/core/styles';
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

function NavBar({ children, open }) {
  const classes = useStyles();
  return (
    <AppBar
      position="fixed"
      className={`${clsx(classes.appBar, {
        [classes.appBarShift]: open,
      })} ${classes.root}`}
    >
      <Toolbar>{children}</Toolbar>
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

export function FormInput(props) {
  const fieldValue = props.fieldValue;
  const classes = styles();

  return (
    <TextField
      id={props.fieldName}
      label={props.fieldName}
      className={clsx(classes.textField)}
      value={fieldValue}
      onChange={e => {
        props.setFieldValue(e.target.value);
      }}
      margin="normal"
      variant="outlined"
    />
  );
}

export function Form(props) {
  const classes = styles();

  return (
    <form className={clsx(classes.container)} noValidate autoComplete="off">
      {props.children}
    </form>
  );
}
