import React from 'react';
import { Typography } from '@material-ui/core';
import { IconButton, Column, Paper } from '../../../../components';
import { useStyles } from './styles';

export default function NoInvite({ history }) {
  const classes = useStyles();

  return (
    <Paper p={10}>
      <Column a="center" j="center">
        <Typography variant="h6" component="h6" className={classes.notice}>
          No invites?
        </Typography>
        <Typography variant="body1" component="p" className={classes.notice}>
          Keep your profile fresh and up-to-date for the best chance of getting
          noticed.
        </Typography>
        <IconButton
          title="Profile"
          icon="contact_mail"
          color="primary"
          styleOverride={null}
          iconPos="right"
          disabled={false}
          type="button"
          onClickEvent={() => {
            history.push('/app/edit-profile');
          }}
        />
      </Column>
    </Paper>
  );
}
