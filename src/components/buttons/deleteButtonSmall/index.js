import React from 'react';
import { Button, Icon } from '@material-ui/core';
import { useStyles } from './styles';

export default function DeleteButtonSmall({ mutation, disabled }) {
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
        title="Confirm Deletion"
        disabled={disabled}
      >
        <Icon style={{ fontSize: 14, color: '#fff' }}>delete</Icon>
      </Button>
      <Button
        onClick={() => {
          setConfirm(false);
        }}
        variant="contained"
        title="Cancel"
        className={classes.deleteButtonConfirmNo}
      >
        <Icon style={{ fontSize: 14, color: '#fff' }}>cancel</Icon>
      </Button>
    </div>
  ) : (
    <Button
      onClick={() => {
        setConfirm(true);
      }}
      variant="contained"
      className={classes.deleteButton}
      disabled={disabled}
    >
      <Icon style={{ fontSize: 18, color: '#fff' }}>delete</Icon>
    </Button>
  );
}
