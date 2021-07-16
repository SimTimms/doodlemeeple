import React from 'react';
import { Typography } from '@material-ui/core';
import { IconButton, Column, CardComponent } from '../../../../components';
import { useStyles } from './styles';

export default function NoInvite({ history }) {
  const classes = useStyles();

  return (
    <Column>
      <CardComponent p={10} styleOverride={{ width: 400, marginTop: 10 }}>
        <Column>
          <Typography variant="h6" component="h6" className={classes.notice}>
            No invites
          </Typography>
          <Typography variant="body1" component="p" className={classes.notice}>
            Keep your profile fresh and up-to-date for the best chance of
            getting noticed.
          </Typography>
          <IconButton
            title="Profile"
            icon="face"
            color="primary"
            iconPos="right"
            type="button"
            onClickEvent={() => {
              history.push('/app/edit-profile');
            }}
          />
        </Column>
      </CardComponent>
    </Column>
  );
}
