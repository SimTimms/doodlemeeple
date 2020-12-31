import React from 'react';
import { Typography } from '@material-ui/core';
import { Paper, Availability, Speculative } from '../../../../components';

export default function TabPreferences({ profile }) {
  return (
    <Paper>
      <Availability available={profile.available} />
      <Speculative available={profile.acceptsSpeculative} />

      <Typography>Accepts Prospectives</Typography>
      <Typography>Accepts In Leiu</Typography>
    </Paper>
  );
}
