import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';

export default function DeleteButton({ mutation, str }) {
  const classes = useStyles();
  const [confirm, setConfirm] = React.useState(false);

  return confirm ? (
    <div className={classes.root}>
      <Button
        onClick={() => {
          mutation();
        }}
        variant="contained"
        className={classes.deleteButtonConfirmYes}
      >
        <Icon
          className={classes.deleteButtonIcon}
          style={{ fontSize: 18, color: '#fff' }}
        >
          delete
        </Icon>
      </Button>
      <Button
        onClick={() => {
          setConfirm(false);
        }}
        variant="contained"
        className={classes.deleteButtonConfirmNo}
      >
        <Icon
          className={classes.deleteButtonIcon}
          style={{ fontSize: 18, color: '#fff', background: 'rgba(0,0,0,0)' }}
        >
          close
        </Icon>
      </Button>
    </div>
  ) : (
    <div className={classes.root}>
      <Button
        onClick={() => {
          setConfirm(true);
        }}
        variant="contained"
        className={classes.deleteButton}
      >
        {str && str}
        <Icon
          className={classes.deleteButtonIcon}
          style={{ fontSize: 18, color: '#fff' }}
        >
          delete
        </Icon>
      </Button>
    </div>
  );
}
