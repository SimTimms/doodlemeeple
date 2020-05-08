import React, { useEffect } from 'react';
import { Button, Icon, Typography } from '@material-ui/core';
import { useStyles } from './styles';
import { toaster } from '../../../utils/toaster';
import clsx from 'clsx';

export default function InviteButton({ mutation, invite }) {
  const classes = useStyles();
  const [on, setOn] = React.useState(false);

  useEffect(() => {
    setOn(invite);
  }, [invite]);

  return (
    <Button
      variant="contained"
      className={clsx({
        [classes.root]: true,
        [classes.rootOn]: on,
      })}
      onClick={() => {
        toaster(
          !on ? (
            <Icon className={classes.iconOn}>thumb_up</Icon>
          ) : (
            'Invite Cancelled'
          ),
        );
        on === true ? setOn(false) : setOn(true);
        mutation();
      }}
    >
      <Typography variant="body1" component="p" style={{ color: '#fff' }}>
        {!on ? 'Select' : 'Selected'}
      </Typography>
    </Button>
  );
}
